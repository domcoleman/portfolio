<template>
  <div :class="$style.ContactPage">
    <h1 :class="$style.title">
      Get In Touch
    </h1>
  </div>
</template>

<style lang="scss" module>
.ContactPage {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  width: 100%;
  min-height: 100%;

  .title {
    color: css-property(heading-font-color);
    font-weight: 100;
    text-indent: 0.5rem;
    @include fluid-type(28px, 56px);
  }
}
</style>
