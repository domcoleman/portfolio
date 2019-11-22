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
  css: [],
  router: {
    linkActiveClass: 'link--active',
    linkExactActiveClass: null
  },
  plugins: ['~/plugins/composition-api'],
  buildModules: ['@nuxt/typescript-build'],
  modules: [],
  build: {}
}
