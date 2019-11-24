<template>
  <li :class="$style.TagLabel">
    <component :is="htmlTag.tagName" v-bind="htmlTag.tagAttributes">
      {{ tag }}
    </component>
  </li>
</template>

<script lang="ts">
import { createComponent, PropType, computed } from '@vue/composition-api'
import { TagName, TagURL } from '~/types/tags'

const TagLabel = createComponent({
  props: {
    tag: {
      type: String as PropType<TagName>,
      required: true
    },
    url: {
      type: String as PropType<TagURL>,
      default: ''
    }
  },
  setup(props) {
    const htmlTag = computed(() => ({
      tagName: props.url ? 'a' : 'span',
      tagAttributes: props.url
        ? { href: props.url, target: '_blank', rel: 'noreferrer noopener' }
        : {}
    }))

    return {
      htmlTag
    }
  }
})

export default TagLabel
</script>

<style lang="scss" module>
.TagLabel {
  color: css-property(tag-label-color);
  font-size: 0.75rem;
  background-color: css-property(tag-label-background-color);
  border-radius: 0.125rem;

  a,
  span {
    display: block;
    padding: 0.375rem 0.5rem;
    color: currentColor;
    text-decoration: none;
  }
}
</style>
