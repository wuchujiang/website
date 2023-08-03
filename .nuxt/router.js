import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _770a7b7c = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _3e533e62 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _26c93fea = () => interopDefault(import('..\\pages\\join.vue' /* webpackChunkName: "pages/join" */))
const _2463ecd6 = () => interopDefault(import('..\\pages\\operation.vue' /* webpackChunkName: "pages/operation" */))
const _bce3323e = () => interopDefault(import('..\\pages\\saas.vue' /* webpackChunkName: "pages/saas" */))
const _d27b537e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _770a7b7c,
    name: "about"
  }, {
    path: "/contact",
    component: _3e533e62,
    name: "contact"
  }, {
    path: "/join",
    component: _26c93fea,
    name: "join"
  }, {
    path: "/operation",
    component: _2463ecd6,
    name: "operation"
  }, {
    path: "/saas",
    component: _bce3323e,
    name: "saas"
  }, {
    path: "/",
    component: _d27b537e,
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
