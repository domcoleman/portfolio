<template>
  <li :class="$style.PortfolioItem">
    <img
      :class="$style.siteImage"
      :src="coverImage.src"
      :srcset="coverImage.srcSet"
      :alt="`${title} Thumbnail`"
    />
    <div :class="$style.infoBackground" />
    <h3 :class="$style.siteTitle">{{ title }}</h3>
    <ul v-if="links.length" :class="$style.siteLinks">
      <li v-for="(link, index) in links" :key="`link-${index}`">
        <a :href="link.linkUrl" target="_blank" rel="noopener noreferrer">
          View {{ link.linkType }}
        </a>
      </li>
    </ul>
    <ul :class="$style.siteTech">
      <TagLabel
        v-for="technology in techList"
        :key="technology.name"
        :tag="technology.name"
        :url="technology.url"
        :class="$style.tagLabel"
      />
    </ul>
    <div :class="$style.siteDescription">
      <p
        v-for="(paragraph, index) in description"
        :key="`p${index}`"
        v-text="paragraph"
      />
    </div>
  </li>
</template>

<script lang="ts">
import { createComponent, PropType, computed } from '@vue/composition-api'
import {
  SiteSlug,
  SiteTitle,
  SiteDescription,
  SiteLink,
  SiteTech,
  SiteImage
} from '~/types/portfolio'
import getTag from '~/utils/getTag'
import portfolioTech from '~/content/portfolio/tech.json'
import TagLabel from '~/components/TagLabel.vue'

const PortfolioItem = createComponent({
  components: {
    TagLabel
  },
  props: {
    slug: {
      type: String as PropType<SiteSlug>,
      required: true
    },
    title: {
      type: String as PropType<SiteTitle>,
      required: true
    },
    description: {
      type: Array as PropType<SiteDescription[]>,
      required: true
    },
    links: {
      type: Array as PropType<SiteLink[]>,
      default: () => []
    },
    tech: {
      type: Array as PropType<SiteTech[]>,
      default: () => []
    },
    images: {
      type: Array as PropType<SiteImage[]>,
      default: () => []
    }
  },
  setup(props) {
    const coverImage = computed(() => props.images.length && props.images[0])

    const techList = computed(() =>
      props.tech.map((name) => getTag(name, portfolioTech))
    )

    return {
      coverImage,
      techList
    }
  }
})

export default PortfolioItem
</script>

<style lang="scss" module>
.PortfolioItem {
  --image-row-start: 1;
  --image-row-end: -2;
  --image-column-start: 1;
  --image-column-end: -1;
  --info-box-row-start: 2;
  --info-box-row-end: -1;
  --info-box-column-start: 1;
  --info-box-column-end: -1;
  display: grid;
  grid-template-rows: minmax(150px, 1fr) repeat(4, auto);
  grid-template-columns: 1;
  margin-bottom: 1.25rem;
  text-align: justify;
  border-radius: 0.25rem;

  .siteImage {
    z-index: 1;
    grid-row: var(--image-row-start) / var(--image-row-end);
    grid-column: var(--image-column-start) / var(--image-column-end);
    min-width: 100%;
    max-width: 100%;
    border: 1px solid css-property(card-border-color);
    border-radius: 0.25rem;
  }

  .infoBackground {
    z-index: 2;
    grid-row: var(--info-box-row-start) / var(--info-box-row-end);
    grid-column: var(--info-box-column-start) / var(--info-box-column-end);
    background-color: css-property(card-background-color);
    border: 1px solid css-property(card-border-color);
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .siteTitle {
    z-index: 3;
    grid-row-start: var(--info-box-row-start);
    grid-column: var(--info-box-column-start) / var(--info-box-column-end);
    padding: 1rem 1rem 0.5rem;
    @include fluid-type(20px, 34px);
  }

  .siteLinks {
    z-index: 3;
    grid-row-start: calc(var(--info-box-row-start) + 1);
    grid-column: var(--info-box-column-start) / var(--info-box-column-end);
    padding: 0.5rem 1rem;
  }

  .siteTech {
    z-index: 3;
    display: flex;
    flex-wrap: wrap;
    grid-row-start: calc(var(--info-box-row-start) + 2);
    grid-column: var(--info-box-column-start) / var(--info-box-column-end);
    padding: 0.5rem 1rem;
  }

  .siteDescription {
    z-index: 3;
    grid-row-start: calc(var(--info-box-row-start) + 3);
    grid-column: var(--info-box-column-start) / var(--info-box-column-end);
    padding: 0 1rem 0.5rem;

    p {
      margin-bottom: 0.5rem;
    }
  }

  .tagLabel {
    font-weight: 300;
    font-family: $mono-font-family;
  }

  @include media('>=nav-cutoff') {
    --image-row-start: 1;
    --image-row-end: -2;
    --image-column-start: 1;
    --image-column-end: span 6;
    --info-box-row-start: 4;
    --info-box-row-end: span 2;
    --info-box-column-start: 4;
    --info-box-column-end: span 6;
    grid-template-rows: minmax(250px, 1fr) repeat(4, auto);
    grid-template-columns: repeat(9, 1fr);
    text-align-last: right;
    border-radius: 0;

    .siteImage {
      box-shadow: 0 0 3px css-property(card-border-color);
    }

    .infoBackground {
      border-radius: 0.25rem;
      box-shadow: 0 0 6px css-property(card-border-color);
    }

    .siteTitle {
      grid-row-start: 2;
      grid-column: 7 / -1;
      background-color: transparent;
    }

    .siteLinks {
      grid-row-start: calc(var(--info-box-row-start) - 1);
      justify-content: flex-end;
    }

    .siteTech {
      grid-row-start: var(--info-box-row-start);
      justify-content: flex-end;
      padding-top: 1rem;
    }

    .siteDescription {
      grid-row-start: calc(var(--info-box-row-start) + 1);
      border-radius: 0.25rem;
    }

    &:nth-child(even) {
      --image-column-start: 4;
      --info-box-column-start: 1;
      text-align-last: left;

      .siteImage {
        justify-self: flex-end;
      }

      .siteTitle {
        grid-column: 1 / span 3;
      }

      .siteTech {
        justify-content: flex-start;
      }
    }
  }
}
</style>
