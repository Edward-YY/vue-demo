<template>
    <div class="avatar-selection">
      <h2>好きなアバターを選んでください</h2>
      <div class="avatar-grid">
        <div
          v-for="(avatar, index) in avatars"
          :key="index"
          :class="['avatar-item', { 'is-hovered': hoveredAvatar === index, 'is-selected': selectedAvatar === index }]"
          @mouseenter="hoverAvatar(index)"
          @mouseleave="hoverAvatar(null)"
          @click="selectAvatar(index)"
        >
          <img :src="avatar" alt="avatar" />
        </div>
      </div>
      <div class="buttons">
        <button class="menu-button" @click="backToBasic">最初から設定し直し</button>
        <button class="menu-button" @click="retrunAvatarList">一歩前に</button>
        <button class="menu-button confirm-button" @click="decideAvatar">決定</button>
      </div>
    </div>
  </template>
  
  <script setup lang = 'ts'>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'
  
  const avatars = [
    'woman1.png',
    'woman2.png',
    'woman3.png',
    'woman4.png',
    'woman5.png',
    'woman6.png',
    'woman7.png',
    'woman8.png'
  ];

  const hoveredAvatar = ref<number | null>(null);
  const selectedAvatar = ref<number | null>(null);

  const hoverAvatar = (index: number | null) => {
    hoveredAvatar.value = index;
  };

  const selectAvatar = (index: number) => {
    selectedAvatar.value = index;
  };

  const router = useRouter()

  function backToBasic() {
    router.push({name : 'basicMenu'})
  }

  function retrunAvatarList() {
    router.push({name : 'otherMenu'})
  }

  function decideAvatar() {
    router.push({name : 'videoL'})
  }

  </script>
  
  <style scoped>
  h2 {
    color: #2c3e50;
    
  }

  .avatar-selection {
    text-align: center;
  }
  
  .avatar-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 3列布局 */
    gap: 10px; /* 图片之间的间距 */
    max-width: 480px; 
    justify-content: center; /* 水平居中 */
    margin: 20px auto 30px auto;
  }
  
  .avatar-item {
    width: 150px;
    height: 200px;
    filter: grayscale(100%);
    transition: transform 0.3s ease, filter 0.3s ease;
  }
  
  .avatar-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    justify-content: center;
  }
  
  .avatar-item.is-hovered {
    filter: none;
    transform: scale(1.15);
    z-index: 10; 
  }
  
  .avatar-item.is-selected {
    filter: none;
  }
  
  .menu-button {
    margin: 15px;
    padding: 10px 20px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    height: 45px;
    width: 160px;
  }
  
  .menu-button.confirm-button {
    /* background-color: #003366; */
  }
  
  .menu-button:hover {
    background-color: #777;
    
  }
  </style>
  