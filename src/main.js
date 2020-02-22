// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/styles/main.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  //Fonts
  head.link.push({
    href: "https://fonts.googleapis.com/css?family=Open+Sans:600&display=swap",
    rel: "stylesheet"
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}