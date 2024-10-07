// https://nuxt.com/docs/api/configuration/nuxt-config

import path from 'path';
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
    '@/assets/styles/main.css',
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
  runtimeConfig: {
    appId: process.env.APP_ID,
    multiApp: process.env.MULTI_APP,
    alias: {
      //'#build': path.resolve(__dirname, '/.output')
    },
    //buildDir: '.output', // 强制指定构建输出目录
    build: {
      //extractCSS: true, // 在生产模式下提取 CSS 到单独的文件
      rollupOptions: {
        external: ['@fortawesome/fontawesome-svg-core']
      },
    },
  },
  build: {
    //extractCSS: true, // 在生产模式下提取 CSS 到单独的文件
  },
  
  // 其他配置项
  vite: {
    resolve: {
      
    },
    build: {
      //extractCSS: true, // 在生产模式下提取 CSS 到单独的文件
      rollupOptions: {
        // external: ['@fortawesome/fontawesome-svg-core']
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variables.scss";'
        }
      }
    }
  }
})

