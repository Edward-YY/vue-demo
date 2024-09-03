<template>
  <div class="container">
    <div class="home">
      <p id="text_1">会話したい俳優名を入力してください</p>
      <input type="text" v-model="actorName" placeholder="俳優の名前" />
        <div class="confirm">
          <button id="confirm_button" @click="confirmName">確認</button>
        </div>
    </div>
  </div>
</template>

// index.vue
<script setup> 
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { key, store } from '../store/index.ts'

const actorName = ref('')
const router = useRouter()
//const store = useStore(key)
var storage;
onMounted(() => {
      storage = localStorage;
    });

function confirmName() {
  console.log('actoerName is : ' + actorName.value) 
  if (actorName.value) {
    store.commit('setActorName', actorName.value)
    if (storage) {
      storage.setItem('actorName', actorName.value);
    }
    router.push({ name: 'loading' })
  }
}

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height: 80vh; /* 设置容器高度为视口高度 */
  margin: 0;
}

.home .conversation {
  margin-top: 0px;
  /* text-align: center; */
}

#text_1 {
  padding-top: 0px;
  margin-bottom: 20px;
  margin-left : -20px;
  margin-top : 70px;
}

input {
  margin: 60px 10px;
  padding-top: 10px;
  font-size: 16px;
  margin-bottom:10px;
}

button {
  background-color:  #0ce2e9;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.controls button {
  margin: 0 10px;
}

#confirm_button{
  margin-top : 10px; 
  margin-left : 60px;
}

</style>

