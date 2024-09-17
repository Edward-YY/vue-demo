<template>
  <div class="container">
    <div class="loading">
      <h1>コーチを生成中です。</h1>
      <p>少しお待ちください...</p>
      <!-- 在这里你可以放一个加载动画 -->
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const selectedGender = ref('')

const router = useRouter()

onMounted(() => {
  selectedGender.value = sessionStorage.getItem('avatarGender')
  
  setTimeout(() => {
    if (selectedGender.value === '女性') {
      router.push({ name: 'avatarListL'})
    } else if (selectedGender.value === '男性') {
      router.push({ name: 'avatarListG'})
    } else {
      router.push({ name: 'avatarList'})
    }
  }, 3000)  // 模拟3秒的加载时间
})
</script>

<style scoped>

.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

h1 {
    color: #2c3e50;
    margin-top: 150px;
  }
p {
  color: #2c3e50;
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

