export const Header = () => import('../..\\components\\header\\header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const IndexOakvip = () => import('../..\\components\\index\\index_oakvip.vue' /* webpackChunkName: "components/index-oakvip" */).then(c => wrapFunctional(c.default || c))
export const IndexXshkvip = () => import('../..\\components\\index\\index_xshkvip.vue' /* webpackChunkName: "components/index-xshkvip" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\footer\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Form = () => import('../..\\components\\form\\form.vue' /* webpackChunkName: "components/form" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
