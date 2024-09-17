<template>
  <div class = "context-container">
    <h1>学習中...</h1>
    <div class="video-area">
      <video ref="videoElement" width="640" height="360">
        <source src="/public/sampleVideo.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="control-area">
      <div class="video-controls">
        <button @click="playVideo">スタート</button>
        <button @click="pauseVideo">一時停止</button>
        <button @click="goEnd">終了</button>
      </div>
      <div class="microControl">
        <div class="mic-button" @click="toggleMic">
          <i :class="['fa', 'fa-microphone', { active: isMicOn }]"></i>
        </div>
      </div>
    </div>
  </div>  
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css';


// 使用 ref 获取 video 元素
const videoElement = ref<HTMLVideoElement | null>(null);

// 播放视频
function playVideo() {
  videoElement.value?.play();
}

// 暂停视频
function pauseVideo() {
  videoElement.value?.pause();
}

// 停止视频（将视频暂停并重置到开头）
function stopVideo() {
  if (videoElement.value) {
    videoElement.value.pause();
    videoElement.value.currentTime = 0; // 将视频重置到开头
  }
}

// 静音视频
function muteVideo() {
  if (videoElement.value) {
    videoElement.value.muted = true;
  }
}

// 取消静音
function unmuteVideo() {
  if (videoElement.value) {
    videoElement.value.muted = false;
  }
}

// 重新播放视频
function restartVideo() {
  if (videoElement.value) {
    videoElement.value.currentTime = 0; // 重置到视频开始
    videoElement.value.play(); // 开始播放
  }
}

const isMicOn = ref(false);
function toggleMic() {
    if (videoElement.value?.paused || videoElement.value?.ended) {
      videoElement.value.play();
      isMicOn.value = false;
    } else {
      videoElement.value?.pause();
      isMicOn.value = true;
    }
   
};

const router = useRouter()
function goEnd() {
  router.push({name : 'endPage'})
}
</script>

<style scoped>

.context-container {
  display : flex;
  flex-direction: column;
  align-items: center;/* 水平居中*/
}

.control-area {
  display: flex;
  align-content: center;
  
}

.video-controls {
  margin-top: 10px;
  float: left;
}

.video-controls button {
  /* padding: 10px 20px; */
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  height: 45px;
  width: 100px;
  margin-right:20px;
}

.video-controls button:hover {
  background-color: #777;
}

.microControl {
  float: left;
  margin-top: 5px;
}

/* 按钮样式 */
.mic-button {
  width: 50px;
  height: 50px;
  border-radius: 30%;
  background-color: #2c3e50;; /* 深蓝色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.mic-button:hover{
  /* 灰褐色 */
  /* background-color: #777; */
}

/* 图标样式 */
.mic-button i {
  color: white; /* 默认白色 */
  font-size: 20px;
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
}

/* 图标被激活后的样式 */
.mic-button i.active {
  color: red; /* 激活时变为红色 */
  transform: scale(1.6); /* 略微放大 */
}

</style>