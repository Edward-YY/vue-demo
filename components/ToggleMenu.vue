<template>
    <div class="menu-container">
      <button class="menu-button" @click="toggleMenu">
        <span class="menu-icon"></span>
        <span class="menu-icon"></span>
        <span class="menu-icon"></span>
      </button>
      <transition name="fade">
        <nav v-if="isMenuOpen" class="menu">
          <slot /> <!-- 可插入自定义内容 -->
        </nav>
      </transition>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'ToggleMenu',
    setup() {
      const isMenuOpen = ref(false);
  
      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
      };
  
      return {
        isMenuOpen,
        toggleMenu,
      };
    },
  });
  </script>
  
  <style scoped>
  /* 汉堡菜单容器 */
  .menu-container {
    position: absolute;
    left: 20px; /* 距离 header 左边的距离，可根据需要调整 */
    bottom: 10px; /* 距离 header 底部的距离，可根据需要调整 */

  }
  
  /* 汉堡菜单按钮 */
  .menu-button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* 汉堡菜单图标 */
  .menu-icon {
    width: 25px;
    height: 3px;
    background-color: #f8f4f4;
    margin: 3px 0;
  }
  
  /* 菜单样式 */
  .menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(247, 243, 243, 0.978);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  
  /* 过渡效果 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  