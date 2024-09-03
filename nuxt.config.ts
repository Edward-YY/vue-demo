// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      // 其他配置
    }
  },
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
  ],
  hooks: {
    'webpack:config'(configs) {
      configs.forEach((config) => {
        config.module.rules.push({
          test: /\.(ogg|mp3|wav|mpe?g)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        });
      });
    },
  },  
})

