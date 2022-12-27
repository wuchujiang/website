import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3a73dfaa = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _4bff85be = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _305a0d08 = () => interopDefault(import('..\\pages\\join.vue' /* webpackChunkName: "pages/join" */))
const _69d79205 = () => interopDefault(import('..\\pages\\operation.vue' /* webpackChunkName: "pages/operation" */))
const _c673ff5c = () => interopDefault(import('..\\pages\\saas.vue' /* webpackChunkName: "pages/saas" */))
const _027deaf0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3a73dfaa,
    name: "about"
  }, {
    path: "/contact",
    component: _4bff85be,
    name: "contact"
  }, {
    path: "/join",
    component: _305a0d08,
    name: "join"
  }, {
    path: "/operation",
    component: _69d79205,
    name: "operation"
  }, {
    path: "/saas",
    component: _c673ff5c,
    name: "saas"
  }, {
    path: "/",
    component: _027deaf0,
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
