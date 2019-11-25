<template>
  <div :class="$style.PortfolioPage">
    <h1 :class="$style.title">
      Recent Work
    </h1>
    <ul :class="$style.portfolioList">
      <PortfolioItem
        v-for="portfolioItem in portfolioItems"
        :key="portfolioItem.siteName"
        v-bind="portfolioItem"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import PortfolioItem from '~/components/Portfolio/PortfolioItem.vue'
import { PortfolioSite, SiteImage } from '~/types/portfolio'
import portfolioSites from '~/content/portfolio/sites.json'

const PortfolioPage = createComponent({
  head: {
    title: 'Recent Work'
  },
  components: {
    PortfolioItem
  },
  async asyncData() {
    const portfolioImages = await require.context(
      '~/content/portfolio',
      true,
      /\.(jpe?g|png)$/
    )

    const portfolioItems = portfolioSites.map(
      (portfolioItem): PortfolioSite => {
        return {
          ...portfolioItem,
          images: portfolioImages
            .keys()
            .reduce((images: SiteImage[], imageFile) => {
              if (imageFile.includes(portfolioItem.slug)) {
                images.push(portfolioImages(imageFile))
              }

              return images
            }, [])
        }
      }
    )

    return {
      portfolioItems
    }
  }
})

export default PortfolioPage
</script>

<style lang="scss" module>
.PortfolioPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;

  .title {
    margin-bottom: 0.75rem;
    color: css-property(heading-font-color);
    font-weight: 100;
    text-indent: 0.5rem;
    @include fluid-type(28px, 56px);
  }

  .portfolioList {
    display: flex;
    flex-direction: column;
  }
}
</style>
