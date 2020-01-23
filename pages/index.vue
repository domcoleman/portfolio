<template>
  <div :class="$style.IndexPage">
    <p :class="$style.highlight">Hi, I'm</p>
    <h1 :class="$style.title">
      Dom Coleman.
    </h1>
    <h2 :class="$style.subtitle">
      I make things for the web.
    </h2>
    <p :class="$style.paragraph">
      I'm a frontend developer based in
      <span :class="$style.highlight">Brighton, UK</span>. I'm passionate about
      keeping up with the latest web technologies. I've loved using
      <span :class="$style.highlight">Vue.js</span> with my recent projects, and
      have experience working with other libraries, such as
      <span :class="$style.highlight">React</span>, and
      <span :class="$style.highlight">Svelte</span>.
    </p>
  </div>
</template>

<style lang="scss" module>
.IndexPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;

  .title {
    margin: 0.25rem 0;
    color: css-property(heading-font-color);
    font-weight: 100;
    text-indent: 0.5rem;
    @include fluid-type(33.1776px, 81px);
  }

  .subtitle {
    margin-bottom: 1.5rem;
    color: css-property(heading-font-color);
    font-weight: 100;
    text-indent: 1.5rem;
    @include fluid-type(19.2px, 54px);
  }

  .paragraph {
    text-align: justify;
  }

  .highlight {
    color: css-property(primary-accent-color);
  }
}
</style>
