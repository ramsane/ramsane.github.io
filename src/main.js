// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
require("typeface-nova-square");
require("typeface-nova-round");
require("typeface-nova-flat");
require("typeface-roboto");

import Title from "~/components/Title.vue";
import BackButton from "~/components/BackButton.vue";

// for load on scroll for the articles
import InfiniteLoading from "vue-infinite-loading";

import NProgress from "nprogress";
import "~/assets/nprogress.css";

// import global css
import "~/assets/styles.css";

// for gtag
import VueGtag from "vue-gtag";
const isProd = process.env.NODE_ENV === "production";

// for prismjs
import "prismjs/themes/prism-tomorrow.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("rs-title", Title);
  Vue.component("rs-back-button", BackButton);

  // for infinite scrolling effect
  Vue.use(InfiniteLoading);

  // for progressbar
  NProgress.configure({
    showSpinner: false,
  });
  router.beforeEach((to, from, next) => {
    // if (!process.isClient) {
    // browser only code
    if (from.name !== null) {
      NProgress.start();
    }
    // }
    next();
  });
  router.afterEach((to, from) => {
    // if (process.isClient) {
    // browser only code
    NProgress.done();
    // }
  });

  // for g-tag google analytics
  Vue.use(
    VueGtag,
    {
      config: {
        id: process.env.GRIDSOME_TRACKING_ID,
      },
      enabled: isProd, // to enable it only during production,
      pageTrackerEnabled: true,
    },
    router
  ); //to track all the pages by the router

  head.link.push({
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
  });
}
