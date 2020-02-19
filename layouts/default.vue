<template>
  <div
    :class="[
      $style.DefaultLayout,
      isDarkMode ? $style.darkMode : $style.lightMode
    ]"
  >
    <div :class="$style.wrapper">
      <nav :class="[$style.navigationContainer, $style.internalNavigation]">
        <Navigation
          :navigation-items="internalLinks"
          :class="$style.navigation"
        />
      </nav>
      <div :class="$style.contentContainer">
        <main :class="$style.content">
          <Nuxt />
        </main>
        <footer :class="$style.pageFooter">
          <div>Copyright &copy; 2019</div>
          <div>
            <a
              href="//github.com/domcoleman/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              >View Source</a
            >
          </div>
        </footer>
      </div>
      <nav :class="[$style.navigationContainer, $style.externalNavigation]">
        <Navigation
          :navigation-items="externalLinks"
          :class="$style.navigation"
        />
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, watch, ref } from '@vue/composition-api'
import useMatchMedia from '~/compositions/useMatchMedia'
import useRouter from '~/compositions/useRouter'
import Navigation from '~/components/Navigation.vue'
import externalNavigation from '~/assets/externalNavigation.json'
import internalNavigation from '~/assets/internalNavigation.json'

const DefaultLayout = createComponent({
  components: {
    Navigation
  },
  setup() {
    const externalLinks = externalNavigation
    const internalLinks = ref(internalNavigation)

    const isDarkMode = useMatchMedia('(prefers-color-scheme: dark)')

    const { route, router } = useRouter()
    watch(route, (newRoute) => {
      const matchingRouteIndex = internalLinks.value.findIndex(
        (internalLink) =>
          newRoute.name ===
          router.resolve(internalLink.link || internalLink).route.name
      )

      if (matchingRouteIndex > 0) {
        const removedRoute = internalLinks.value.splice(matchingRouteIndex, 1)
        internalLinks.value.unshift(...removedRoute)
      }
    })

    return {
      externalLinks,
      internalLinks,
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
  --content-width: 100%;
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

  .contentContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 1rem 1rem calc(#{$internal-navigation-size} + 1rem) 1rem;
    padding: calc(1rem + env(safe-area-inset-top, 0))
      calc(1rem + env(safe-area-inset-right, 0))
      calc(#{$internal-navigation-size} + 1rem + env(safe-area-inset-bottom, 0))
      calc(1rem + env(safe-area-inset-left, 0));

    .content {
      display: flex;
      flex-grow: 1;
      align-items: center;
      width: var(--content-width);
      margin: 0 auto;

      @include media('landscape-desktop') {
        margin-top: 2.5rem;
      }
    }

    .pageFooter {
      width: var(--content-width);
      margin: 4rem auto 0;
      color: css-property(footer-color);
      text-align: center;

      a {
        color: currentColor;
      }
    }
  }

  .navigationContainer {
    --navigation-width: var(--content-width);
    position: fixed;
    bottom: 0;
    z-index: 20;
    width: 100%;
    background-color: css-property(navigation-background-color);

    &.internalNavigation {
      --navigation-height: #{$internal-navigation-size};
      --icon-size: #{$internal-navigation-icon-size};
      padding-bottom: env(safe-area-inset-bottom, 0);
    }

    &.externalNavigation {
      --navigation-height: #{$external-navigation-size};
      --icon-size: #{$external-navigation-icon-size};
      --link-text-display: none;
      --link-text-visibility: hidden;
      display: none;
      visibility: hidden;
    }

    .navigation {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--navigation-width);
      height: var(--navigation-height);
      margin: 0 auto;
      padding: 0.5rem 0;
    }
  }

  @include media('landscape-handheld') {
    .contentContainer {
      padding: 1rem calc(#{$internal-navigation-size} + 1rem) 1rem
        calc(#{$external-navigation-size} + 1rem);
      padding: calc(1rem + env(safe-area-inset-top, 0))
        calc(
          #{$internal-navigation-size} + 1rem + env(safe-area-inset-right, 0)
        )
        calc(1rem + env(safe-area-inset-bottom, 0))
        calc(#{$external-navigation-size} + 1rem + env(safe-area-inset-left, 0));
    }

    .navigationContainer {
      width: auto;

      &.internalNavigation {
        --navigation-width: #{$internal-navigation-size};
        --navigation-height: 100vh;
        --justify-content: flex-start;
        right: 0;
        padding-right: env(safe-area-inset-right, 0);
      }

      &.externalNavigation {
        --navigation-width: #{$external-navigation-size};
        --navigation-height: 100vh;
        --justify-content: flex-end;
        left: 0;
        display: flex;
        padding-left: env(safe-area-inset-left, 0);
        visibility: visible;
      }

      .navigation {
        flex-direction: column;
        justify-content: var(--justify-content);
        padding: 1rem 0;
      }
    }
  }

  @include media('landscape-desktop') {
    --content-width: 90vw;

    .contentContainer {
      padding: calc(#{$internal-navigation-size} + 1rem) 1rem
        calc(#{$external-navigation-size} + 1rem) 1rem;
      padding: calc(
          #{$internal-navigation-size} + 1rem + env(safe-area-inset-top, 0)
        )
        calc(1rem + env(safe-area-inset-right, 0))
        calc(
          #{$external-navigation-size} + 1rem + env(safe-area-inset-bottom, 0)
        )
        calc(1rem + env(safe-area-inset-left, 0));
    }

    .navigationContainer {
      padding: 0 1rem;

      &.internalNavigation {
        top: 0;
        bottom: initial;

        li:first-of-type {
          margin-right: auto;
        }
      }

      &.externalNavigation {
        display: flex;
        height: #{$external-navigation-size};
        visibility: visible;

        li:first-of-type {
          margin-left: auto;
        }
      }

      .navigation {
        padding: 0.75rem 0;
      }
    }
  }

  @include media('>=max-width') {
    --content-width: #{$max-content-width};
  }
}

:global(.fade-page) {
  &-enter-active,
  &-leave-active {
    transition: 0.25s cubic-bezier(0.59, 0.12, 0.34, 0.95);
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
