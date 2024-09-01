<template>
  <div class="container">
    <div class="loading">
      <h1>少しお待ちください</h1>
      <p>俳優生成中...</p>
      <!-- 在这里你可以放一个加载动画 -->
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    // router.push({ name: 'conversation', params: { name: router.currentRoute.value.params.name } })
    router.push({ name: 'conversation'})
  }, 3000)  // 模拟3秒的加载时间
})
</script>

<style scoped>
/* 样式调整 */
.container {
  display: flex;
  justify-content: center;
  height: 80vh; /* 设置容器高度为视口高度 */
  margin: 0;
}

.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

input {
  margin: 20px 0;
  padding: 10px;
  font-size: 16px;
}

button {
  background-color: #4A90E2;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.controls button {
  margin: 0 10px;
}

</style>

