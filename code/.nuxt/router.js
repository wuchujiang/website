import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3c3c0ee2 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _1ff0b2b5 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _6ed6c7e5 = () => interopDefault(import('..\\pages\\join.vue' /* webpackChunkName: "pages/join" */))
const _06315d3c = () => interopDefault(import('..\\pages\\operation.vue' /* webpackChunkName: "pages/operation" */))
const _23c9cebb = () => interopDefault(import('..\\pages\\saas.vue' /* webpackChunkName: "pages/saas" */))
const _5bf3e9a7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3c3c0ee2,
    name: "about"
  }, {
    path: "/contact",
    component: _1ff0b2b5,
    name: "contact"
  }, {
    path: "/join",
    component: _6ed6c7e5,
    name: "join"
  }, {
    path: "/operation",
    component: _06315d3c,
    name: "operation"
  }, {
    path: "/saas",
    component: _23c9cebb,
    name: "saas"
  }, {
    path: "/",
    component: _5bf3e9a7,
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
