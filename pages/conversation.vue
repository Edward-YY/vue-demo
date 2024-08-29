<template>
  <div class="conversation">
    <h1>会話中</h1>
    <img :src="actorImage" alt="AI生成の俳優" />
    <p>私は{{ actorName }}です。今からあなたの日本語教師を担当します。</p>
    <div class="controls">
      <button>⏸</button>
      <button>▶️</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const actorName = computed(() => route.params.name)

// 在这里使用预先生成的图像URL
const actorImage = computed(() => `/static/${actorName.value}.jpg`)
</script>

<style scoped>
/* 样式调整 */
.home, .loading, .conversation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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

