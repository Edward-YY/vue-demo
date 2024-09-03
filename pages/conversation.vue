<template>
  
  <div class="container">
    <div class="conversation">
      <h1 id="h_1">{{ actorName }}と会話中. . .</h1>
      <!-- <img :src="actorImage" alt="AI生成の俳優" /> -->
      <img src="/static/risa.gif" alt="AI生成の俳優" class="actorImage"/>
      <!-- <p id="conversation_text_1">私は{{ actorName }}です。今からあなたの日本語教師を担当します。</p> -->
      <div class="controls">
        <button @click="pauseAudio">⏸</button>
        <button @click="playAudio">▶️</button>
      </div>
      <div class="microControl">
        <button @click="toggleAudio" id="phoneButt">
          <font-awesome-icon icon="microphone" id="microIcon" class="iconClass"/>
        </button>
      </div>
      <div class="back-button-container">
        <button class="back-button" @click="goHome">Back</button>
      </div>
      <div>
        <audio ref="audioRef" src="risa.wav" preload="auto"></audio>
      </div>
    </div>
  </div>
</template>

// conversation.vue
<script setup>
import { computed, ref } from 'vue'
import { store } from '../store/index'
import { useRouter } from 'vue-router';
import {  onMounted } from 'vue';
import sound from "../public/risa.wav"

var storage;
var audio = new Audio(sound);
onMounted(() => {
      storage = localStorage;
      console.log("localStorage is getted.");
});

const actorName = computed(() => getStoredActor())

function getStoredActor() {
  var result = store.getters.getActorName
  if (!result && storage) {
    result = storage.getItem('actorName');
    console.log("actorName is getted from local storage" )
  }
  console.log("result value is : " + result)
  return result
}


const actorImage = computed(() => {
  // return actorName.value ? `/static/上野.jpg` : ''
  return `a.jpg`
})

const router = useRouter();
function goHome(){
  router.push({ name: 'index' })
}

const isPlaying = ref(false);
// 获取音频元素的引用

const isWhite = ref(true); 

// 切换音频播放状态
const toggleAudio = () => {
    if (isPlaying.value) {
      audio.pause();
      document.getElementById("microIcon").style.color = "red";
    } else {
      audio.play();
      document.getElementById("microIcon").style.color = "white";
    }
    // 切换播放状态
    isPlaying.value = !isPlaying.value;
};

const playAudio = () => {
  audio.play();
  isPlaying.value = true;
}

const pauseAudio = () => {
  audio.pause();
  isPlaying.value = false;
}

// 计算图标的类名
const iconClass = computed(() => ({
  'icon-white': isWhite.value,
  'icon-red': !isWhite.value
}));

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
  margin-bottom: 10px;
  padding-left: 40px;
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
  float: left;
  margin: 0px 0px;
}

.controls {
  margin-left: 70px;
}

.actorImage {
  width: 100%;
  height: 60%;
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

.microControl {
  float: left;
  margin-left: 0px;
  
}

/* 图标的白色样式 */
.icon-white {
  color: white;
}

/* 图标的红色样式 */
.icon-red {
  color: red;
}

</style>

