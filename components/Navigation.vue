<template>
  <TransitionGroup name="navigation" tag="ul">
    <NavigationItem
      v-for="navigationLink in navigationItems"
      :key="`navigation-${navigationLink.name}`"
      v-bind="navigationLink"
    />
  </TransitionGroup>
</template>

<script lang="ts">
import { createComponent, PropType } from '@vue/composition-api'
import { NavigationLink } from '~/types/navigation'
import NavigationItem from '~/components/Navigation/NavigationItem.vue'

const Navigation = createComponent({
  components: {
    NavigationItem
  },
  props: {
    navigationItems: {
      type: Array as PropType<NavigationLink[]>,
      required: true
    }
  }
})

export default Navigation
</script>

<style lang="scss">
.navigation-move {
  transition: 0.5s cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: transform;
}
</style>
