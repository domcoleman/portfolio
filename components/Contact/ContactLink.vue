<template>
  <li :class="$style.ContactLink">
    <a
      :href="urlWithPrefix"
      :class="$style.link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <component :is="icon" v-if="icon" :class="$style.platformIcon" />
      {{ url }}
    </a>
  </li>
</template>

<script lang="ts">
import { createComponent, PropType, computed } from '@vue/composition-api'
import getSVG from '~/utils/getSVG'

const ContactLink = createComponent({
  props: {
    platform: {
      type: String as PropType<string>,
      required: true
    },
    url: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const icon = computed(() => getSVG(props.platform))
    const urlWithPrefix = computed(
      () => (props.url.includes('@') ? 'mailto:' : '//') + props.url
    )

    return {
      icon,
      urlWithPrefix
    }
  }
})

export default ContactLink
</script>

<style lang="scss" module>
.ContactLink {
  .link {
    display: flex;
    gap: 0.675rem;
    align-items: center;
    text-decoration: none;

    &:hover {
      color: css-property(primary-accent-color-hover);
    }
  }

  .platformIcon {
    max-width: 2rem;
    max-height: 2rem;
    fill: currentColor;
  }
}
</style>
