export { default as Footer } from '../..\\components\\footer\\footer.vue'
export { default as Form } from '../..\\components\\form\\form.vue'
export { default as Header } from '../..\\components\\header\\header.vue'
export { default as IndexOakvip } from '../..\\components\\index\\index_oakvip.vue'
export { default as IndexXshkvip } from '../..\\components\\index\\index_xshkvip.vue'

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
