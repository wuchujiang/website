import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _162fa663 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _4b5c6df6 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _0241bc44 = () => interopDefault(import('..\\pages\\join.vue' /* webpackChunkName: "pages/join" */))
const _059b4c3d = () => interopDefault(import('..\\pages\\operation.vue' /* webpackChunkName: "pages/operation" */))
const _919679cc = () => interopDefault(import('..\\pages\\saas.vue' /* webpackChunkName: "pages/saas" */))
const _35e78128 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _162fa663,
    name: "about"
  }, {
    path: "/contact",
    component: _4b5c6df6,
    name: "contact"
  }, {
    path: "/join",
    component: _0241bc44,
    name: "join"
  }, {
    path: "/operation",
    component: _059b4c3d,
    name: "operation"
  }, {
    path: "/saas",
    component: _919679cc,
    name: "saas"
  }, {
    path: "/",
    component: _35e78128,
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
