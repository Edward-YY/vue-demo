import {createApp} from 'vue'
import { store, key } from './store'

const app = createApp({...})
app.use(store, key)
app.mount('#app')

<template>
  <div>
  <!-- 渲染页面内容 -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>

