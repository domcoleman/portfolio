<template>
  <li :class="$style.navigationItem">
    <NuxtLink
      :to="linkTo"
      v-bind="tagProps"
      :class="$style.link"
      :aria-label="linkText"
    >
      <component :is="icon" v-if="icon" :class="$style.linkIcon" />
      <span :class="$style.linkText">{{ linkText }}</span>
    </NuxtLink>
  </li>
</template>

<script lang="ts">
import { createComponent, PropType, computed } from '@vue/composition-api'
import {
  NavigationLinkName,
  NavigationLinkURL,
  NavigationLinkDisplay,
  NavigationLinkTagProps
} from '~/types/navigation'
import getSVG from '~/utils/getSVG'

const NavigationItem = createComponent({
  props: {
    name: {
      type: String as PropType<NavigationLinkName>,
      required: true
    },
    link: {
      type: [String, Object] as PropType<NavigationLinkURL>,
      default: null
    },
    display: {
      type: String as PropType<NavigationLinkDisplay>,
      default: null
    },
    tagProps: {
      type: Object as PropType<NavigationLinkTagProps>,
      default: () => ({})
    }
  },
  setup(props) {
    const linkText = computed(
      () =>
        props.display ||
        props.name.charAt(0).toUpperCase() + props.name.substring(1)
    )

    const linkTo = computed(() => props.link || { name: props.name })

    const icon = computed(() => getSVG(props.name))

    return {
      linkText,
      linkTo,
      icon
    }
  }
})

export default NavigationItem
</script>

<style lang="scss" module>
.navigationItem {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  margin: 0 0.5rem;

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: css-property(navigation-link-color);
    font-size: 16px;
    text-decoration: none;
    cursor: default;
    transition: color 0.3s ease-out;

    &:global(.link--active) {
      color: css-property(navigation-link-color-active);
    }

    &:not(:global(.link--active)):hover {
      color: css-property(navigation-link-color-hover);
      cursor: pointer;
    }

    &[target] {
      .linkIcon {
        fill: currentColor;
        stroke: none;
      }
    }
  }

  .linkText {
    display: var(--link-text-display, block);
    margin-top: 0.5rem;
    font-size: 0.875rem;
    visibility: var(--link-text-visibility, visible);
  }

  .linkIcon {
    width: var(--icon-size);
    max-height: var(--icon-size);
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @include media('<nav-cutoff') {
    order: var(--phone-order, initial);
  }

  @include media('landscape-handheld') {
    order: var(--order, initial);
    height: auto;
    margin: 0.5rem 0;
  }

  @include media('landscape-desktop') {
    .link {
      flex-direction: row;
      align-items: flex-end;
      height: 100%;
    }

    .linkText {
      margin-left: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
}
</style>
