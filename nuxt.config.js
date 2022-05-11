export default {
    telemetry: false,
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: '橡树黑卡',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    router: {
        scrollBehavior (to, from) {
            return { x: 0, y: 0 }
        }
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        'style/index.scss'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/userAuth'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    components: true,

    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
    ],
    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        postcss: [
            require('postcss-px2rem')({
                remUnit: 23.4375
            })
        ],
    }
}