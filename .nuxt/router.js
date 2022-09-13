import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ce796f28 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _778fb1bf = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _c9c595ca = () => interopDefault(import('..\\pages\\join.vue' /* webpackChunkName: "pages/join" */))
const _1be67c74 = () => interopDefault(import('..\\pages\\operation.vue' /* webpackChunkName: "pages/operation" */))
const _50103bf1 = () => interopDefault(import('..\\pages\\saas.vue' /* webpackChunkName: "pages/saas" */))
const _8f09b99e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ce796f28,
    name: "about"
  }, {
    path: "/contact",
    component: _778fb1bf,
    name: "contact"
  }, {
    path: "/join",
    component: _c9c595ca,
    name: "join"
  }, {
    path: "/operation",
    component: _1be67c74,
    name: "operation"
  }, {
    path: "/saas",
    component: _50103bf1,
    name: "saas"
  }, {
    path: "/",
    component: _8f09b99e,
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
