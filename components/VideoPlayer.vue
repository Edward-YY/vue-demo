<template>
    <div>
      <video ref="videoElement" width="640" height="360">
        <source src="~/static/videos/sampleVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="video-controls">
        <button @click="playVideo">播放</button>
        <button @click="pauseVideo">暂停</button>
        <button @click="stopVideo">停止</button>
        <button @click="muteVideo">静音</button>
        <button @click="unmuteVideo">取消静音</button>
        <button @click="restartVideo">重新开始</button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, defineComponent } from 'vue';
  
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
  </script>
  
  <style scoped>
  .video-controls {
    margin-top: 10px;
  }
  
  button {
    margin-right: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>