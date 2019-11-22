<template>
  <div
    :class="[
      $style.DefaultLayout,
      isDarkMode ? $style.darkMode : $style.lightMode
    ]"
  >
    <div :class="$style.wrapper">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import useMatchMedia from '~/compositions/useMatchMedia'

const DefaultLayout = createComponent({
  setup() {
    const isDarkMode = useMatchMedia('(prefers-color-scheme: dark)')

    return {
      isDarkMode
    }
  }
})

export default DefaultLayout
</script>

<style lang="scss" module>
.lightMode {
  @include map-color-scheme($color-scheme-light);
}

.darkMode {
  @include map-color-scheme($color-scheme-dark);
}

.DefaultLayout {
  width: 100%;
  min-height: 100vh;
  color: css-property(primary-font-color);
  letter-spacing: css-property(primary-letter-spacing);
  background-color: css-property(primary-background-color);

  :global(a) {
    color: css-property(primary-accent-color);
    transition: color 0.3s ease-in-out;
  }

  .wrapper {
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
  }
}
</style>
