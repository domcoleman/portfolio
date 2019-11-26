# Dom Coleman's Web Portfolio

[View Live Site](//domcoleman.com/)

This is the current iteration of my personal portfolio.

As stated on the portfolio, I've been loving working with Vue.js recently, so have have used it along with Nuxt.js to create this site.

With Vue.js v3 coming up, I opted to use the new [Composition API](//github.com/vuejs/composition-api) plugin to familiarize myself with the API being introduced in the new version.

There are dark and light mode color schemes, with the dark mode being the default when the browser does not support the `prefers-color-scheme` media query.

Images on the 'Recent Work' page are responsive, using [Nuxt Responsive Loader](//github.com/geeogi/nuxt-responsive-loader) with [sharp](//github.com/lovell/sharp) to generate resized images for use with the `srcset` image attribute.

## Previews

### Desktop

![desktop](https://raw.githubusercontent.com/domcoleman/portfolio/master/static/preview/desktop.png)

### Small Device (landscape)

![phone-landscape](https://raw.githubusercontent.com/domcoleman/portfolio/master/static/preview/phone-landscape.png)

### Small Device (portrait)

![phone-portrait](https://raw.githubusercontent.com/domcoleman/portfolio/master/static/preview/phone-portrait.png)

## Colors

| Name          | Hex                                                                |
| ------------- | ------------------------------------------------------------------ |
| White         | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF) `#FFFFFF` |
| Black         | ![#000000](https://via.placeholder.com/15/000000/000000) `#000000` |
| Cod Gray      | ![#1A1A1A](https://via.placeholder.com/15/1A1A1A/1A1A1A) `#1A1A1A` |
| Diesel        | ![#110000](https://via.placeholder.com/15/110000/110000) `#110000` |
| Golden Fizz   | ![#FFFA3D](https://via.placeholder.com/15/FFFA3D/FFFA3D) `#FFFA3D` |
| Green Yellow  | ![#B3F23A](https://via.placeholder.com/15/B3F23A/B3F23A) `#B3F23A` |
| Inch Worm     | ![#A4ED19](https://via.placeholder.com/15/A4ED19/A4ED19) `#A4ED19` |
| Geyser        | ![#D8DDE3](https://via.placeholder.com/15/D8DDE3/D8DDE3) `#D8DDE3` |
| Mischka       | ![#CACEDB](https://via.placeholder.com/15/CACEDB/CACEDB) `#CACEDB` |
| Cerise        | ![#DB358F](https://via.placeholder.com/15/DB358F/DB358F) `#DB358F` |
| Jazzberry Jam | ![#A1095C](https://via.placeholder.com/15/A1095C/A1095C) `#A1095C` |
| Alabaster     | ![#F7F7F7](https://via.placeholder.com/15/F7F7F7/F7F7F7) `#F7F7F7` |
| Fun Green     | ![#036A22](https://via.placeholder.com/15/036A22/036A22) `#036A22` |

## Built With

### Languages/Frameworks
- [TypeScript](//typescriptlang.org/)
- [Vue.js](//vuejs.org/)
- [Nuxt.js](//nuxtjs.org/)
- [SCSS](//sass-lang.com/)

### Fonts
- [Raleway](//theleagueofmoveabletype.com/raleway/)
- [Victor Mono](//rubjo.github.io/victor-mono/)

### Other Mentions

[Vue Hooks](//github.com/u3u/vue-hooks/) - Used u3u's router composition function in order to access the router whilst using Vue.js's composition API.
