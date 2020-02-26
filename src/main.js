// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faGithub,
  faTwitter,
  faLinkedin,
  faAngellist,
  faFontAwesome,
} from '@fortawesome/free-brands-svg-icons'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'


import '~/styles/main.css'
import DefaultLayout from '~/layouts/Default.vue'

library.add(
  faGithub,
  faTwitter,
  faTerminal,
  faLinkedin,
  faAngellist,
  faFontAwesome,
)

Vue.component('font-awesome-icon', FontAwesomeIcon)


export default function (Vue, { router, head, isClient }) {
  //Fonts
  head.link.push({
    href: "https://fonts.googleapis.com/css?family=Open+Sans:600&display=swap",
    rel: "stylesheet"
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}