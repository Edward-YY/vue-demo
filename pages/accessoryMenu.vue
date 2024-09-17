<template>
    <div class="menu-container">
      <h3>アクセサリーを設定してください</h3>
  
      <!-- 服のスタイル -->
    <div class="menu-block">
      <div class="menu-row">
        <span class="menu-label">アクセサリー</span>
        <div class="menu-options">
          <div
            v-for="(option, index) in accessoryOptions"
            :key="index"
            :class="['menu-option', { selected: selectedAccessory === option }]"
            @click="selectAccessory(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>
  
      <!-- 底部按钮 -->
      <div class="menu-buttons">
        <button class="menu-button" @click="accessoryBack">前に戻る</button>
        <button class="menu-button skip-button" @click="skipAccessory">SKIP</button>
        <button class="menu-button confirm-button" @click="confirmAccessory">次へ</button>
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  // 定义选项数据
  const accessoryOptions = ['メガネ', '帽子', 'ネックレス', 'イヤリング', 'その他', 'なし']

  
  // 定义选中的选项
  const selectedAccessory = ref('')
  
  // 选中时的处理函数
  const selectAccessory = (option) => {
    selectedAccessory.value = option
  }

  const router = useRouter()

  function accessoryBack() {
    router.back()
  }

  function skipAccessory() {
    router.push({name : 'expressionMenu'})
  }

  function confirmAccessory() {
    router.push({name : 'expressionMenu'})
  }

  </script>
  
  <style scoped>
  .menu-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Arial', sans-serif;
  }
  
  h3 {
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
    color : white;
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
  