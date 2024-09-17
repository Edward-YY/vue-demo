<template>
    <div class="menu-container">
      <h2>外見を設定してください</h2>
  
      <!-- 性别选择 -->
    <div class="menu-block">
      <div class="menu-row">
        <span class="menu-label">肌色</span>
        <div class="menu-options">
          <div
            v-for="(option, index) in skinOptions"
            :key="index"
            :class="['menu-option', { selected: selectedSkin === option }]"
            @click="selectSkin(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>
  
      <!-- 髪色 -->
      <div class="menu-row">
        <span class="menu-label">髪色</span>
        <div class="menu-options">
          <div
            v-for="(option, index) in hairColorOptions"
            :key="index"
            :class="['menu-option', { selected: selectedHairColor === option }]"
            @click="selectHairColor(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>
  
      <!-- 髪スタイル -->
      <div class="menu-row">
        <span class="menu-label">髪のスタイル</span>
        <div class="menu-options">
          <div
            v-for="(option, index) in hairStyleOptions"
            :key="index"
            :class="['menu-option', { selected: selectedHairStyle === option }]"
            @click="selectHairStyle(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>

      <!-- 目の色 -->
      <div class="menu-row">
        <span class="menu-label">目の色</span>
        <div class="menu-options">
          <div
            v-for="(option, index) in eyeColorOptions"
            :key="index"
            :class="['menu-option', { selected: selectedEyeColor === option }]"
            @click="selectEyeColor(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>
    </div>
  
      <!-- 底部按钮 -->
      <div class="menu-buttons">
        <button class="menu-button" @click="exteriorBack">前に戻る</button>
        <button class="menu-button skip-button" @click="skipExterior">SKIP</button>
        <button class="menu-button confirm-button" @click="confirmExterior">確認</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from '#vue-router'
  
  // 定义选项数据
  const skinOptions = ['明るい', '中間', '暗い']
  const hairColorOptions = ['黒', '茶色', '金', '赤', '白/灰色', 'その他']
  const hairStyleOptions = ['短髪', '中髪', '長髪', 'カール', 'ストレート']
  const eyeColorOptions = ['黒', '茶色','青','緑','灰色','その他']
  
  // 定义选中的选项
  const selectedSkin = ref('')
  const selectedHairColor = ref('')
  const selectedHairStyle = ref('')
  const selectedEyeColor = ref('')
  
  // 选中时的处理函数
  const selectSkin = (option) => {
    selectedSkin.value = option
  }
  
  const selectHairColor = (option) => {
    selectedHairColor.value = option
  }
  
  const selectHairStyle = (option) => {
    selectedHairStyle.value = option
  }
  
  const selectEyeColor = (option) => {
    selectedEyeColr.value = option
  }

  const router = useRouter()
  
  function exteriorBack() {
    router.back()
  }

  function skipExterior() {
    router.push({name : 'clotheMenu'})
  }

  function confirmExterior() {
    router.push({name : 'clotheMenu'})
  }

  </script>
  
  <style scoped>
  .menu-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Arial', sans-serif;
  }
  
  h2 {
    color: #2c3e50;
    margin-bottom: 20px;
  }
  
  .menu-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    
  }


  .menu-row {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .menu-label {
    margin-right: 20px;
    color: #2c3e50;
    font-weight: bold;
  }
  
  .menu-options {
    display: flex;
    gap: 10px;
  }
  
  .menu-option {
    padding: 10px 20px;
    border: 2px solid #2c3e50;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .menu-option:hover {
    background-color: #B3CDE0;
  }
  
  .selected {
    background-color: #2c3e50;
    color: white;
  }
  
  .menu-buttons {
    display: flex;
    gap: 30px;
    margin-top: 50px;
  }
  
  .menu-button {
    padding: 10px 20px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    height: 45px;
    width: 100px;
    
  }
  .menu-button:hover {
  background-color: #777;
}

  .confirm-button {
    background-color: #2c3e50;
  }

  .confirm-button:hover {
    background-color: #777;
  }

  </style>
  