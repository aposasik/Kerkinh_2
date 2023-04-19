import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _628df67f = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _e974b076 = () => interopDefault(import('..\\pages\\creators.vue' /* webpackChunkName: "pages/creators" */))
const _34933738 = () => interopDefault(import('..\\pages\\deigmata\\index.vue' /* webpackChunkName: "pages/deigmata/index" */))
const _4856b3f9 = () => interopDefault(import('..\\pages\\files\\index.vue' /* webpackChunkName: "pages/files/index" */))
const _e864f222 = () => interopDefault(import('..\\pages\\pictures\\index.vue' /* webpackChunkName: "pages/pictures/index" */))
const _ac7a3b32 = () => interopDefault(import('..\\pages\\prwtokola\\index.vue' /* webpackChunkName: "pages/prwtokola/index" */))
const _454a8474 = () => interopDefault(import('..\\pages\\ornithopanida\\ct-eidh\\index.vue' /* webpackChunkName: "pages/ornithopanida/ct-eidh/index" */))
const _af4cdc12 = () => interopDefault(import('..\\pages\\ornithopanida\\ct-press-threats\\index.vue' /* webpackChunkName: "pages/ornithopanida/ct-press-threats/index" */))
const _d1a221c4 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida/index" */))
const _956f39a8 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida-x-eidh\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida-x-eidh/index" */))
const _16389f51 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida-x-press-threats\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida-x-press-threats/index" */))
const _9a4bb55e = () => interopDefault(import('..\\pages\\ornithopanida\\eventBus.js' /* webpackChunkName: "pages/ornithopanida/eventBus" */))
const _655a2775 = () => interopDefault(import('..\\pages\\prwtokola\\new.vue' /* webpackChunkName: "pages/prwtokola/new" */))
const _27b2ef01 = () => interopDefault(import('..\\pages\\thhlastika\\ct-eidh\\index.vue' /* webpackChunkName: "pages/thhlastika/ct-eidh/index" */))
const _46d4d9c8 = () => interopDefault(import('..\\pages\\thhlastika\\ct-press-threats\\index.vue' /* webpackChunkName: "pages/thhlastika/ct-press-threats/index" */))
const _5ef0b9e6 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn/index" */))
const _908b3138 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn-x-eidh\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn-x-eidh/index" */))
const _49dbda19 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn-x-press-threats\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn-x-press-threats/index" */))
const _d081df14 = () => interopDefault(import('..\\pages\\thhlastika\\eventBus.js' /* webpackChunkName: "pages/thhlastika/eventBus" */))
const _d4c162d8 = () => interopDefault(import('..\\pages\\ornithopanida\\ct-eidh\\new.vue' /* webpackChunkName: "pages/ornithopanida/ct-eidh/new" */))
const _15f77b05 = () => interopDefault(import('..\\pages\\ornithopanida\\ct-press-threats\\new.vue' /* webpackChunkName: "pages/ornithopanida/ct-press-threats/new" */))
const _6139d50c = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida-x-eidh\\new.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida-x-eidh/new" */))
const _6f0e16df = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida-x-press-threats\\new.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida-x-press-threats/new" */))
const _68e3b3a8 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida\\map.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida/map" */))
const _b6001428 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida\\new.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida/new" */))
const _6138928f = () => interopDefault(import('..\\pages\\thhlastika\\ct-eidh\\new.vue' /* webpackChunkName: "pages/thhlastika/ct-eidh/new" */))
const _031b816a = () => interopDefault(import('..\\pages\\thhlastika\\ct-press-threats\\new.vue' /* webpackChunkName: "pages/thhlastika/ct-press-threats/new" */))
const _7f0e709c = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn-x-eidh\\new.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn-x-eidh/new" */))
const _665163a7 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn-x-press-threats\\new.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn-x-press-threats/new" */))
const _eaacdf20 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn\\map.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn/map" */))
const _72745a98 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn\\new.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn/new" */))
const _87aab3aa = () => interopDefault(import('..\\pages\\ornithopanida\\ct-eidh\\dynamic-search\\page\\_number\\index.vue' /* webpackChunkName: "pages/ornithopanida/ct-eidh/dynamic-search/page/_number/index" */))
const _4817cb46 = () => interopDefault(import('..\\pages\\ornithopanida\\ct-eidh\\search\\page\\_number\\index.vue' /* webpackChunkName: "pages/ornithopanida/ct-eidh/search/page/_number/index" */))
const _178d8bda = () => interopDefault(import('..\\pages\\ornithopanida\\ct-press-threats\\dynamic-search\\page\\_number\\index.vue' /* webpackChunkName: "pages/ornithopanida/ct-press-threats/dynamic-search/page/_number/index" */))
const _19d31f0c = () => interopDefault(import('..\\pages\\ornithopanida\\ct-press-threats\\search\\page\\_number\\index.vue' /* webpackChunkName: "pages/ornithopanida/ct-press-threats/search/page/_number/index" */))
const _f9fc57f6 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida-x-eidh\\dynamic-search\\page\\_number\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida-x-eidh/dynamic-search/page/_number/index" */))
const _59c87b92 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida-x-eidh\\search\\page\\_number\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida-x-eidh/search/page/_number/index" */))
const _02035340 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida-x-press-threats\\dynamic-search\\page\\_number\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida-x-press-threats/dynamic-search/page/_number/index" */))
const _2de1ac72 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida-x-press-threats\\search\\page\\_number\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida-x-press-threats/search/page/_number/index" */))
const _56b36c5a = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida\\dynamic-search\\page\\_number\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida/dynamic-search/page/_number/index" */))
const _4081e605 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida\\search\\page\\_number\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida/search/page/_number/index" */))
const _73a9e4e0 = () => interopDefault(import('..\\pages\\thhlastika\\ct-eidh\\dynamic-search\\page\\_number\\index.vue' /* webpackChunkName: "pages/thhlastika/ct-eidh/dynamic-search/page/_number/index" */))
const _615e927c = () => interopDefault(import('..\\pages\\thhlastika\\ct-eidh\\search\\page\\_number\\index.vue' /* webpackChunkName: "pages/thhlastika/ct-eidh/search/page/_number/index" */))
const _3b0aa615 = () => interopDefault(import('..\\pages\\thhlastika\\ct-press-threats\\dynamic-search\\page\\_number\\index.vue' /* webpackChunkName: "pages/thhlastika/ct-press-threats/dynamic-search/page/_number/index" */))
const _4fdfa447 = () => interopDefault(import('..\\pages\\thhlastika\\ct-press-threats\\search\\page\\_number\\index.vue' /* webpackChunkName: "pages/thhlastika/ct-press-threats/search/page/_number/index" */))
const _3ddd48cd = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn-x-eidh\\dynamic-search\\page\\_number\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn-x-eidh/dynamic-search/page/_number/index" */))
const _56fc7eff = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn-x-eidh\\search\\page\\_number\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn-x-eidh/search/page/_number/index" */))
const _6e2abf78 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn-x-press-threats\\dynamic-search\\page\\_number\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn-x-press-threats/dynamic-search/page/_number/index" */))
const _63165eac = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn-x-press-threats\\search\\page\\_number\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn-x-press-threats/search/page/_number/index" */))
const _6645b3ea = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn\\dynamic-search\\page\\_number\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn/dynamic-search/page/_number/index" */))
const _6b947a3d = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn\\search\\page\\_number\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn/search/page/_number/index" */))
const _80bca866 = () => interopDefault(import('..\\pages\\deigmata\\dynamic-search\\page\\_number\\index.vue' /* webpackChunkName: "pages/deigmata/dynamic-search/page/_number/index" */))
const _28d3e1ff = () => interopDefault(import('..\\pages\\deigmata\\search\\page\\_number\\index.vue' /* webpackChunkName: "pages/deigmata/search/page/_number/index" */))
const _0b9a4a6c = () => interopDefault(import('..\\pages\\files\\search\\page\\_number\\index.vue' /* webpackChunkName: "pages/files/search/page/_number/index" */))
const _baa1d9d8 = () => interopDefault(import('..\\pages\\pictures\\search\\page\\_number\\index.vue' /* webpackChunkName: "pages/pictures/search/page/_number/index" */))
const _4f9e509c = () => interopDefault(import('..\\pages\\prwtokola\\search\\page\\_number\\index.vue' /* webpackChunkName: "pages/prwtokola/search/page/_number/index" */))
const _418b3b14 = () => interopDefault(import('..\\pages\\ornithopanida\\ct-eidh\\_id\\index.vue' /* webpackChunkName: "pages/ornithopanida/ct-eidh/_id/index" */))
const _876344fa = () => interopDefault(import('..\\pages\\ornithopanida\\ct-press-threats\\_id\\index.vue' /* webpackChunkName: "pages/ornithopanida/ct-press-threats/_id/index" */))
const _d929f524 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida-x-eidh\\_id\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida-x-eidh/_id/index" */))
const _2b38cf2e = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida-x-press-threats\\_id\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida-x-press-threats/_id/index" */))
const _804fbe88 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida\\_id\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida/_id/index" */))
const _9f50d28e = () => interopDefault(import('..\\pages\\thhlastika\\ct-eidh\\_id\\index.vue' /* webpackChunkName: "pages/thhlastika/ct-eidh/_id/index" */))
const _7ce36904 = () => interopDefault(import('..\\pages\\thhlastika\\ct-press-threats\\_id\\index.vue' /* webpackChunkName: "pages/thhlastika/ct-press-threats/_id/index" */))
const _7b2ae436 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn-x-eidh\\_id\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn-x-eidh/_id/index" */))
const _5a044abe = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn-x-press-threats\\_id\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn-x-press-threats/_id/index" */))
const _9e245a18 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn\\_id\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn/_id/index" */))
const _529335b8 = () => interopDefault(import('..\\pages\\ornithopanida\\ct-eidh\\_id\\edit.vue' /* webpackChunkName: "pages/ornithopanida/ct-eidh/_id/edit" */))
const _1cba8969 = () => interopDefault(import('..\\pages\\ornithopanida\\ct-press-threats\\_id\\edit.vue' /* webpackChunkName: "pages/ornithopanida/ct-press-threats/_id/edit" */))
const _f2788fc4 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida-x-eidh\\_id\\edit.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida-x-eidh/_id/edit" */))
const _3f3f59c3 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida-x-press-threats\\_id\\edit.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida-x-press-threats/_id/edit" */))
const _8c8209e0 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida\\_id\\edit.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida/_id/edit" */))
const _30ea8d81 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida\\_id\\files\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida/_id/files/index" */))
const _4d863f32 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida\\_id\\pictures\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida/_id/pictures/index" */))
const _c0be0a82 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida\\_id\\x-eidh\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida/_id/x-eidh/index" */))
const _327445c4 = () => interopDefault(import('..\\pages\\ornithopanida\\deigma-ornithopanida\\_id\\x-press-threats\\index.vue' /* webpackChunkName: "pages/ornithopanida/deigma-ornithopanida/_id/x-press-threats/index" */))
const _66aa5173 = () => interopDefault(import('..\\pages\\thhlastika\\ct-eidh\\_id\\edit.vue' /* webpackChunkName: "pages/thhlastika/ct-eidh/_id/edit" */))
const _39d11fe4 = () => interopDefault(import('..\\pages\\thhlastika\\ct-press-threats\\_id\\edit.vue' /* webpackChunkName: "pages/thhlastika/ct-press-threats/_id/edit" */))
const _3ba8e056 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn-x-eidh\\_id\\edit.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn-x-eidh/_id/edit" */))
const _25b7f08b = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn-x-press-threats\\_id\\edit.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn-x-press-threats/_id/edit" */))
const _3ae3bc50 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn\\_id\\edit.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn/_id/edit" */))
const _18aa6c49 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn\\_id\\files\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn/_id/files/index" */))
const _6b39a6c2 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn\\_id\\pictures\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn/_id/pictures/index" */))
const _a0461612 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn\\_id\\x-eidh\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn/_id/x-eidh/index" */))
const _1173e1e6 = () => interopDefault(import('..\\pages\\thhlastika\\deigma-thhlastikwn\\_id\\x-press-threats\\index.vue' /* webpackChunkName: "pages/thhlastika/deigma-thhlastikwn/_id/x-press-threats/index" */))
const _e7b5f194 = () => interopDefault(import('..\\pages\\deigmata\\_id\\index.vue' /* webpackChunkName: "pages/deigmata/_id/index" */))
const _7755d313 = () => interopDefault(import('..\\pages\\prwtokola\\_id\\index.vue' /* webpackChunkName: "pages/prwtokola/_id/index" */))
const _3d434554 = () => interopDefault(import('..\\pages\\deigmata\\_id\\edit.vue' /* webpackChunkName: "pages/deigmata/_id/edit" */))
const _a1b3bc4e = () => interopDefault(import('..\\pages\\prwtokola\\_id\\edit.vue' /* webpackChunkName: "pages/prwtokola/_id/edit" */))
const _fb745d78 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _628df67f,
    name: "about"
  }, {
    path: "/creators",
    component: _e974b076,
    name: "creators"
  }, {
    path: "/deigmata",
    component: _34933738,
    name: "deigmata"
  }, {
    path: "/files",
    component: _4856b3f9,
    name: "files"
  }, {
    path: "/pictures",
    component: _e864f222,
    name: "pictures"
  }, {
    path: "/prwtokola",
    component: _ac7a3b32,
    name: "prwtokola"
  }, {
    path: "/ornithopanida/ct-eidh",
    component: _454a8474,
    name: "ornithopanida-ct-eidh"
  }, {
    path: "/ornithopanida/ct-press-threats",
    component: _af4cdc12,
    name: "ornithopanida-ct-press-threats"
  }, {
    path: "/ornithopanida/deigma-ornithopanida",
    component: _d1a221c4,
    name: "ornithopanida-deigma-ornithopanida"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-eidh",
    component: _956f39a8,
    name: "ornithopanida-deigma-ornithopanida-x-eidh"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-press-threats",
    component: _16389f51,
    name: "ornithopanida-deigma-ornithopanida-x-press-threats"
  }, {
    path: "/ornithopanida/eventBus",
    component: _9a4bb55e,
    name: "ornithopanida-eventBus"
  }, {
    path: "/prwtokola/new",
    component: _655a2775,
    name: "prwtokola-new"
  }, {
    path: "/thhlastika/ct-eidh",
    component: _27b2ef01,
    name: "thhlastika-ct-eidh"
  }, {
    path: "/thhlastika/ct-press-threats",
    component: _46d4d9c8,
    name: "thhlastika-ct-press-threats"
  }, {
    path: "/thhlastika/deigma-thhlastikwn",
    component: _5ef0b9e6,
    name: "thhlastika-deigma-thhlastikwn"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-eidh",
    component: _908b3138,
    name: "thhlastika-deigma-thhlastikwn-x-eidh"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-press-threats",
    component: _49dbda19,
    name: "thhlastika-deigma-thhlastikwn-x-press-threats"
  }, {
    path: "/thhlastika/eventBus",
    component: _d081df14,
    name: "thhlastika-eventBus"
  }, {
    path: "/ornithopanida/ct-eidh/new",
    component: _d4c162d8,
    name: "ornithopanida-ct-eidh-new"
  }, {
    path: "/ornithopanida/ct-press-threats/new",
    component: _15f77b05,
    name: "ornithopanida-ct-press-threats-new"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-eidh/new",
    component: _6139d50c,
    name: "ornithopanida-deigma-ornithopanida-x-eidh-new"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-press-threats/new",
    component: _6f0e16df,
    name: "ornithopanida-deigma-ornithopanida-x-press-threats-new"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/map",
    component: _68e3b3a8,
    name: "ornithopanida-deigma-ornithopanida-map"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/new",
    component: _b6001428,
    name: "ornithopanida-deigma-ornithopanida-new"
  }, {
    path: "/thhlastika/ct-eidh/new",
    component: _6138928f,
    name: "thhlastika-ct-eidh-new"
  }, {
    path: "/thhlastika/ct-press-threats/new",
    component: _031b816a,
    name: "thhlastika-ct-press-threats-new"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-eidh/new",
    component: _7f0e709c,
    name: "thhlastika-deigma-thhlastikwn-x-eidh-new"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-press-threats/new",
    component: _665163a7,
    name: "thhlastika-deigma-thhlastikwn-x-press-threats-new"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/map",
    component: _eaacdf20,
    name: "thhlastika-deigma-thhlastikwn-map"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/new",
    component: _72745a98,
    name: "thhlastika-deigma-thhlastikwn-new"
  }, {
    path: "/ornithopanida/ct-eidh/dynamic-search/page/:number",
    component: _87aab3aa,
    name: "ornithopanida-ct-eidh-dynamic-search-page-number"
  }, {
    path: "/ornithopanida/ct-eidh/search/page/:number",
    component: _4817cb46,
    name: "ornithopanida-ct-eidh-search-page-number"
  }, {
    path: "/ornithopanida/ct-press-threats/dynamic-search/page/:number",
    component: _178d8bda,
    name: "ornithopanida-ct-press-threats-dynamic-search-page-number"
  }, {
    path: "/ornithopanida/ct-press-threats/search/page/:number",
    component: _19d31f0c,
    name: "ornithopanida-ct-press-threats-search-page-number"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-eidh/dynamic-search/page/:number",
    component: _f9fc57f6,
    name: "ornithopanida-deigma-ornithopanida-x-eidh-dynamic-search-page-number"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-eidh/search/page/:number",
    component: _59c87b92,
    name: "ornithopanida-deigma-ornithopanida-x-eidh-search-page-number"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-press-threats/dynamic-search/page/:number",
    component: _02035340,
    name: "ornithopanida-deigma-ornithopanida-x-press-threats-dynamic-search-page-number"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-press-threats/search/page/:number",
    component: _2de1ac72,
    name: "ornithopanida-deigma-ornithopanida-x-press-threats-search-page-number"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/dynamic-search/page/:number",
    component: _56b36c5a,
    name: "ornithopanida-deigma-ornithopanida-dynamic-search-page-number"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/search/page/:number",
    component: _4081e605,
    name: "ornithopanida-deigma-ornithopanida-search-page-number"
  }, {
    path: "/thhlastika/ct-eidh/dynamic-search/page/:number",
    component: _73a9e4e0,
    name: "thhlastika-ct-eidh-dynamic-search-page-number"
  }, {
    path: "/thhlastika/ct-eidh/search/page/:number",
    component: _615e927c,
    name: "thhlastika-ct-eidh-search-page-number"
  }, {
    path: "/thhlastika/ct-press-threats/dynamic-search/page/:number",
    component: _3b0aa615,
    name: "thhlastika-ct-press-threats-dynamic-search-page-number"
  }, {
    path: "/thhlastika/ct-press-threats/search/page/:number",
    component: _4fdfa447,
    name: "thhlastika-ct-press-threats-search-page-number"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-eidh/dynamic-search/page/:number",
    component: _3ddd48cd,
    name: "thhlastika-deigma-thhlastikwn-x-eidh-dynamic-search-page-number"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-eidh/search/page/:number",
    component: _56fc7eff,
    name: "thhlastika-deigma-thhlastikwn-x-eidh-search-page-number"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-press-threats/dynamic-search/page/:number",
    component: _6e2abf78,
    name: "thhlastika-deigma-thhlastikwn-x-press-threats-dynamic-search-page-number"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-press-threats/search/page/:number",
    component: _63165eac,
    name: "thhlastika-deigma-thhlastikwn-x-press-threats-search-page-number"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/dynamic-search/page/:number",
    component: _6645b3ea,
    name: "thhlastika-deigma-thhlastikwn-dynamic-search-page-number"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/search/page/:number",
    component: _6b947a3d,
    name: "thhlastika-deigma-thhlastikwn-search-page-number"
  }, {
    path: "/deigmata/dynamic-search/page/:number",
    component: _80bca866,
    name: "deigmata-dynamic-search-page-number"
  }, {
    path: "/deigmata/search/page/:number",
    component: _28d3e1ff,
    name: "deigmata-search-page-number"
  }, {
    path: "/files/search/page/:number",
    component: _0b9a4a6c,
    name: "files-search-page-number"
  }, {
    path: "/pictures/search/page/:number",
    component: _baa1d9d8,
    name: "pictures-search-page-number"
  }, {
    path: "/prwtokola/search/page/:number",
    component: _4f9e509c,
    name: "prwtokola-search-page-number"
  }, {
    path: "/ornithopanida/ct-eidh/:id",
    component: _418b3b14,
    name: "ornithopanida-ct-eidh-id"
  }, {
    path: "/ornithopanida/ct-press-threats/:id",
    component: _876344fa,
    name: "ornithopanida-ct-press-threats-id"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-eidh/:id",
    component: _d929f524,
    name: "ornithopanida-deigma-ornithopanida-x-eidh-id"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-press-threats/:id",
    component: _2b38cf2e,
    name: "ornithopanida-deigma-ornithopanida-x-press-threats-id"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/:id",
    component: _804fbe88,
    name: "ornithopanida-deigma-ornithopanida-id"
  }, {
    path: "/thhlastika/ct-eidh/:id",
    component: _9f50d28e,
    name: "thhlastika-ct-eidh-id"
  }, {
    path: "/thhlastika/ct-press-threats/:id",
    component: _7ce36904,
    name: "thhlastika-ct-press-threats-id"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-eidh/:id",
    component: _7b2ae436,
    name: "thhlastika-deigma-thhlastikwn-x-eidh-id"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-press-threats/:id",
    component: _5a044abe,
    name: "thhlastika-deigma-thhlastikwn-x-press-threats-id"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/:id",
    component: _9e245a18,
    name: "thhlastika-deigma-thhlastikwn-id"
  }, {
    path: "/ornithopanida/ct-eidh/:id?/edit",
    component: _529335b8,
    name: "ornithopanida-ct-eidh-id-edit"
  }, {
    path: "/ornithopanida/ct-press-threats/:id?/edit",
    component: _1cba8969,
    name: "ornithopanida-ct-press-threats-id-edit"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-eidh/:id?/edit",
    component: _f2788fc4,
    name: "ornithopanida-deigma-ornithopanida-x-eidh-id-edit"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-press-threats/:id?/edit",
    component: _3f3f59c3,
    name: "ornithopanida-deigma-ornithopanida-x-press-threats-id-edit"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/:id?/edit",
    component: _8c8209e0,
    name: "ornithopanida-deigma-ornithopanida-id-edit"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/:id?/files",
    component: _30ea8d81,
    name: "ornithopanida-deigma-ornithopanida-id-files"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/:id?/pictures",
    component: _4d863f32,
    name: "ornithopanida-deigma-ornithopanida-id-pictures"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/:id?/x-eidh",
    component: _c0be0a82,
    name: "ornithopanida-deigma-ornithopanida-id-x-eidh"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/:id?/x-press-threats",
    component: _327445c4,
    name: "ornithopanida-deigma-ornithopanida-id-x-press-threats"
  }, {
    path: "/thhlastika/ct-eidh/:id?/edit",
    component: _66aa5173,
    name: "thhlastika-ct-eidh-id-edit"
  }, {
    path: "/thhlastika/ct-press-threats/:id?/edit",
    component: _39d11fe4,
    name: "thhlastika-ct-press-threats-id-edit"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-eidh/:id?/edit",
    component: _3ba8e056,
    name: "thhlastika-deigma-thhlastikwn-x-eidh-id-edit"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-press-threats/:id?/edit",
    component: _25b7f08b,
    name: "thhlastika-deigma-thhlastikwn-x-press-threats-id-edit"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/:id?/edit",
    component: _3ae3bc50,
    name: "thhlastika-deigma-thhlastikwn-id-edit"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/:id?/files",
    component: _18aa6c49,
    name: "thhlastika-deigma-thhlastikwn-id-files"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/:id?/pictures",
    component: _6b39a6c2,
    name: "thhlastika-deigma-thhlastikwn-id-pictures"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/:id?/x-eidh",
    component: _a0461612,
    name: "thhlastika-deigma-thhlastikwn-id-x-eidh"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/:id?/x-press-threats",
    component: _1173e1e6,
    name: "thhlastika-deigma-thhlastikwn-id-x-press-threats"
  }, {
    path: "/deigmata/:id",
    component: _e7b5f194,
    name: "deigmata-id"
  }, {
    path: "/prwtokola/:id",
    component: _7755d313,
    name: "prwtokola-id"
  }, {
    path: "/deigmata/:id/edit",
    component: _3d434554,
    name: "deigmata-id-edit"
  }, {
    path: "/prwtokola/:id/edit",
    component: _a1b3bc4e,
    name: "prwtokola-id-edit"
  }, {
    path: "/",
    component: _fb745d78,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
