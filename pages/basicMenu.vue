<template>
    <div class="menu-container">
      <h2>コーチの基本属性を設定してください</h2>
  
      <!-- 性别选择 -->
    <div class="menu-block">
      <div class="menu-row">
        <span class="menu-label">性別</span>
        <div class="menu-options">
          <div
            v-for="(option, index) in genderOptions"
            :key="index"
            :class="['menu-option', { selected: selectedGender === option }]"
            @click="selectGender(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>
  
      <!-- 年龄选择 -->
      <div class="menu-row">
        <span class="menu-label">年齢</span>
        <div class="menu-options">
          <div
            v-for="(option, index) in ageOptions"
            :key="index"
            :class="['menu-option', { selected: selectedAge === option }]"
            @click="selectAge(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>
  
      <!-- 出身エリア选择 -->
      <div class="menu-row">
        <span class="menu-label">出身エリア</span>
        <div class="menu-options">
          <div
            v-for="(option, index) in regionOptions"
            :key="index"
            :class="['menu-option', { selected: selectedRegion === option }]"
            @click="selectRegion(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>
    </div>
  
      <!-- 底部按钮 -->
      <div class="menu-buttons">
        <button class="menu-button" @click="toBefore">前に戻る</button>
        <button class="menu-button" @click="skipBasic">SKIP</button>
        <button class="menu-button confirm-button" @click="confirmBasic">次へ</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  // 定义选项数据
  const genderOptions = ['男性', '女性']
  const ageOptions = ['10代', '20代', '30代', '40代', '50代～']
  const regionOptions = ['東アジア', '東南アジア', 'ヨーロッパ', '北アメリカ', '南アメリカ', 'アフリカ']
  
  // 定义选中的选项
  const selectedGender = ref('')
  const selectedAge = ref('')
  const selectedRegion = ref('')
  
  // 选中时的处理函数
  const selectGender = (option) => {
    selectedGender.value = option
  }
  
  const selectAge = (option) => {
    selectedAge.value = option
  }
  
  const selectRegion = (option) => {
    selectedRegion.value = option
  }

  const router = useRouter()

  function toBefore() {
    router.push({name : 'index'})
  }

  function skipBasic() {
    router.push({name : 'exteriorMenu'})
  }

  function confirmBasic() {
    sessionStorage.setItem('avatarGender', selectedGender.value);
    router.push({name : 'exteriorMenu'})
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
  