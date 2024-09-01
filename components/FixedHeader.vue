<template>
    <header class="fixed-header">
        <!-- 固定栏内容 -->
        <slot></slot>
    </header>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
name: 'FixedHeader',
});
</script>

<style scoped>
.fixed-header {
position: fixed;
top: 0;
left: 0;
width: 100%;
background-color: #333;
color: #fff;
padding: 10px;
z-index: 1000;
}
</style>
  