<template>
  <div :class="$style.ContactPage">
    <h1 :class="$style.title">Get In Touch</h1>
    <p :class="$style.paragraph">
      If you have a project or anything else you'd like to discuss with me
      please don't hesitate to contact me through one of the methods below.
    </p>
    <ul :class="$style.contactLinks">
      <ContactLink
        v-for="link in contactLinks"
        :key="link.platform"
        v-bind="link"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import ContactLink from '~/components/Contact/ContactLink.vue'
import contactLinks from '~/assets/contact.json'

const ContactPage = createComponent({
  components: {
    ContactLink
  },
  setup() {
    return {
      contactLinks
    }
  }
})

export default ContactPage
</script>

<style lang="scss" module>
.ContactPage {
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

  .paragraph {
    margin-bottom: 0.75rem;
    text-align: justify;
  }

  .contactLinks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    @include media('landscape-desktop') {
      justify-content: space-around;
    }
  }
}
</style>
