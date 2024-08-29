<template>
  <div class="home">
    <h1>ホーム</h1>
    <p>会話したい俳優名を入力してください</p>
    <input type="text" v-model="actorName" placeholder="俳優の名前" />
    <button @click="confirmName">確認</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const actorName = ref('')
const router = useRouter()

function confirmName() {
  if (actorName.value) {
    router.push({ name: 'loading', params: { name: actorName.value } })
  }
}
</script>

<style scoped>
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

