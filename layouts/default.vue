<template>
    <div class="layout">
        <!-- 这里可以放置全局导航栏、侧边栏等 -->
        <header class="header">
            <div class="left-content">
                <ToggleMenu>
                <!-- 自定义菜单内容 -->
                    <a href="#">Menu Item 1</a>
                    <a href="#">Menu Item 2</a>
                    <a href="#">Menu Item 3</a>
                </ToggleMenu>
            </div>
            <nav class="nav">
                <slot name="header">
                    <!-- 默认导航栏内容 -->
                    <!-- <h1>ホーム</h1> -->
                </slot>
            </nav>
            <div class="right-content">
                <i class="fas fa-search icon"></i>
                <i class="fas fa-envelope icon"></i>
                <i class="fas fa-user icon"></i>
            </div>

        </header>
        
        <!-- 用于插入每个页面的具体内容 -->
        <main class="content">
            <slot />
        </main>

        <footer class="footer">
        <!-- 页脚内容 -->
            <p>&copy; SoftBank Corp.</p>
        </footer>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import ToggleMenu from '~/components/ToggleMenu.vue';

export default defineComponent({
name: 'DefaultLayout',
components: {
    ToggleMenu,
}
});

</script>



<style scoped>
/* 整个布局使用Flexbox */
.layout {
display: flex;
flex-direction: column;
min-height: 100vh;/* 高度至少为浏览器视口高度 */
}

/* 样式定义 */
.header {
    height: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #0ce2e9;
    color: rgb(250, 241, 241);
    padding: 10px;
    text-align: center;
    z-index: 1000; 
}

.nav {
  flex-grow: 1;
  text-align: center;
}

.right-content {
  position: absolute;
  right: 40px;
  bottom:10px;
  display: flex;
  gap: 15px;
}

.icon {
  font-size: 20px;
  cursor: pointer;
  transition: color 0.3s;
}

.icon:hover {
  color: #ffcc00; /* Change color on hover */
}

.content {
    flex: 1;

    margin-top: 100px; /* 确保内容不被header遮挡 */
    margin-bottom: 40px; /* 确保内容不被footer遮挡 */
    padding: 20px;
    overflow-y: auto; /* 确保内容区域可以滚动 */

}

.footer {
    height:10vh;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #0ce2e9;
    color: rgb(250, 241, 241);
    padding: 10px;
    text-align: center;
    z-index: 0; 
}
</style>
  