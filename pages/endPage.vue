<template>
    <div class="container">
        <div class="home">
            <h1 id="text_1">もう少し学習しましょうか。</h1>
            <div class="confirm-area">
                <button id="start_button" @click="goVideo">学習を続ける</button>
                <button id="start_button" @click="goBasicMenu">他のコーチを選ぶ</button>
                <button id="start_button" @click="goIndex">終了</button>
            </div>
        </div>
    </div>
</template>

<script setup> 
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { key, store } from '../store/index.ts'

const router = useRouter()
//const store = useStore(key)
const selectedGender = ref('')

onMounted(() => {
    selectedGender.value = sessionStorage.getItem('avatarGender')
    console.log('【endPage】avatarGender getted : ' + selectedGender.value )
}) 

function goVideo() {
    if (selectedGender.value == '男性') {
        router.push({name : 'videoG'})
    } else if (selectedGender.value == '女性') {
        router.push({name : 'videoL'})
    } else {
        router.push({name : 'video'})
    }
    
}

function goBasicMenu() {
  router.push({name : 'basicMenu'})
}

function goIndex() {
    router.push({name : 'index'})
}

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height: 80vh; /* 设置容器高度为视口高度 */
  margin: 0;
}

.home {
  margin-top: 0px;
  /* text-align: center; */
}

#text_1 {
  padding-top: 0px;
  margin-bottom: 20px;
  margin-left : -20px;
  margin-top : 70px;
  color: #2c3e50;
}

.confirm-area {
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}

#start_button{
    margin-top: 10px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 45px;
    cursor: pointer;
    height: 85px;
    width:300px;
    font-size: 25px;
}

#start_button:hover {
    background-color: #777;
}

</style>