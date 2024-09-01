<template>
  
  <div class="container">
    <div class="conversation">
      <h1 id="h_1">{{ actorName }}と会話中. . .</h1>
      <!-- <img :src="actorImage" alt="AI生成の俳優" /> -->
      <img src="/static/risa.gif" alt="AI生成の俳優" class="actorImage"/>
      <!-- <p id="conversation_text_1">私は{{ actorName }}です。今からあなたの日本語教師を担当します。</p> -->
      <!-- <p>私は上野です。今からあなたの日本語教師を担当します。</p> -->
      <div class="controls">
        <button>⏸</button>
        <button>▶️</button>
        <div class="back-button-container">
          <button class="back-button" @click="goHome">Back</button>
        </div>
      </div>
      <div>
        <audio src="gowest.mp3" preload="auto"></audio>
      </div>
     
    </div>
  </div>
  
  
</template>

// conversation.vue
<script setup>
import { computed } from 'vue'
// import { useStore } from 'vuex'
import { store } from '../store/index'
import { useRouter } from 'vue-router';
import { defineComponent, onMounted } from 'vue';

//const store = useStore()
//const actorName = computed(() => store.state.actorName)
const actorName = store.getters.getActorName

const actorImage = computed(() => {
  // return actorName.value ? `/static/上野.jpg` : ''
  return `a.jpg`
})

const router = useRouter();
function goHome(){
  router.push({ name: 'index' })
}
</script>


<style scoped>
/* 样式调整 */
.container {
  display: flex;
  /* align-items: center;  */
  justify-content: center;
  height: 80vh; /* 设置容器高度为视口高度 */
  margin: 0;
}

.home .conversation {
  
  position: relative; /* 使 transform 生效 */
  transform: translateX(-50%); /* 垂直居中对齐的调整 */
  /* text-align: center; */
}

#h_1 {
  margin-top:0px;
  margin-bottom: 50px;
}

button {
  background-color: #0ce2e9;
  color: rgb(254, 254, 254);
  /* 边框属性 */
  border: 2px solid #dad9d9;
  padding: 10px 20px;
  margin: 0px;
  font-size: 16px;
  cursor: pointer;
  height: 50px;
}

.controls button {
  margin: 0px 0px;
}

.controls {
  margin-left: 20px;
}

.actorImage {
  width: 100%;
  height: 30%;
  margin-left: -20px;
  padding-left : 0px;
  border: 3px solid #0ce2e9;
}

.conversation_text_1 {
  position: relative; /* 使 transform 生效 */
  transform: translateY(-50%); /* 垂直居中对齐的调整 */
}

.back-button-container {
  position: absolute;
  right: 60px;
  bottom: 120px;
}

.back-button:hover {
  background-color: #777;
}


</style>

