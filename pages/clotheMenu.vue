<template>
    <div class="menu-container">
      <h2>服装を設定してください</h2>
  
      <!-- 服のスタイル -->
    <div class="menu-block">
      <div class="menu-row">
        <span class="menu-label">服のスタイル</span>
        <div class="menu-options">
          <div
            v-for="(option, index) in clotheStyleOptions"
            :key="index"
            :class="['menu-option', { selected: selectedClotheStyle === option }]"
            @click="selectClotheStyle(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>
  
      <!-- 服の色 -->
      <div class="menu-row">
        <span class="menu-label">服の色</span>
        <div class="menu-options">
          <div
            v-for="(option, index) in clotheColoOptions"
            :key="index"
            :class="['menu-option', { selected: selectedClotheColor === option }]"
            @click="selectClotheColor(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>

      <!-- 底部按钮 -->
      <div class="menu-buttons">
        <button class="menu-button" @click="clotheBack">前に戻る</button>
        <button class="menu-button skip-button" @click="skipClothe">SKIP</button>
        <button class="menu-button confirm-button" @click="confirmClothe">次へ</button>
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  // 定义选项数据
  const clotheStyleOptions = ['カジュアル', 'ビジネス', 'スポーツ', '民族衣装', 'ファッション']
  const clotheColoOptions = ['明るい色', '暗い色', '原色', 'パステルカラー']
  
  // 定义选中的选项
  const selectedClotheStyle = ref('')
  const selectedClotheColor = ref('')
  
  // 选中时的处理函数
  const selectClotheStyle = (option) => {
    selectedClotheStyle.value = option
  }

  const selectClotheColor = (option) => {
    selectedClotheColor.value = option;
  }

  const router = useRouter()

  function clotheBack() {
    router.back()
  }

  function skipClothe() {
    router.push({name : 'accessoryMenu'})
  }

  function confirmClothe() {
    router.push({name : 'accessoryMenu'})
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
  