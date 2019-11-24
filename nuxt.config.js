export default {
  mode: 'universal',
  head: {
    titleTemplate: (title) =>
      title
        ? `${title} - Web Development by Dom Coleman`
        : 'Web Development by Dom Coleman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['~assets/scss/style.scss', '~assets/scss/fonts.scss'],
  router: {
    linkActiveClass: 'link--active',
    linkExactActiveClass: null
  },
  pageTransition: 'fade-page',
  plugins: ['~/plugins/composition-api', '~/plugins/vue-runtime'],
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/style-resources', '@nuxtjs/svg'],
  styleResources: {
    scss: ['~assets/scss/global.scss', 'include-media/dist/_include-media.scss']
  },
  build: {
    extend(config, { isDev }) {
      // =======================================================================
      // rename css classes
      const moduleCssLoader = config.module.rules
        .find((rule) => rule.test.toString() === '/\\.css$/i')
        .oneOf.find((rule) => rule.resourceQuery.toString() === '/module/')
        .use.find((rule) => rule.loader === 'css-loader')

      moduleCssLoader.options.modules.localIdentName = isDev
        ? '[path][name]__[local]'
        : '[hash:base64:8]'
    }
  }
}
