<template>
    <div class="menu-container">
      <h2>その他の属性を設定してください</h2>
  
      <!-- 服のスタイル -->
    <div class="menu-block">
      <div class="menu-row">
        <span class="menu-label">声のトーン</span>
        <div class="menu-options">
          <div
            v-for="(option, index) in voiceToneOptions"
            :key="index"
            :class="['menu-option', { selected: selectedVoiceTone === option }]"
            @click="selectVoiceTone(option)"
          >
            {{ option }}
          </div>
        </div>
        </div>
        <div class="menu-row">
        <span class="menu-label">話し方</span>
        <div class="menu-options">
          <div
            v-for="(option, index) in speakStyleOptions"
            :key="index"
            :class="['menu-option', { selected: selectedSpeakStyle === option }]"
            @click="selectSpeakStyle(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>
  
      <!-- 底部按钮 -->
      <div class="menu-buttons">
        <button class="menu-button" @click="otherMenuBack">一歩前に</button>
        <button class="menu-button skip-button" @click="skipOtherMenu">SKIP</button>
        <button class="menu-button confirm-button" @click="confirmOtherMenu">確認</button>
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  // 定义选项数据
  const voiceToneOptions = ['高め', '中間', '低め']
  const speakStyleOptions = ['フォーマル', 'カジュアル', '親しみやすい', 'ビジネス']

  // 定义选中的选项
  const selectedVoiceTone = ref('')
  const selectedSpeakStyle = ref('')
  
  
  // 选中时的处理函数
  const selectVoiceTone = (option) => {
    selectedVoiceTone.value = option
  }

  const selectSpeakStyle = (option) => {
    selectedSpeakStyle.value = option
  }

  const router = useRouter()

  function otherMenuBack() {
    router.back()
  }

  function skipOtherMenu() {
    router.push({name : 'loading'})
  }

  function confirmOtherMenu() {
    router.push({name : 'loading'})
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
  