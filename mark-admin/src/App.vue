<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/main.css";

#app {
  padding: 0;
  margin: 0;
  width: 100vw;
  /* 视口宽度 */
  height: 100vh;
  /* 视口高度 */
  color: var(--mk-text-color);
  overflow: hidden;
  /* 防止内容溢出 */
  background-color: var(--mk-bg-color);
}
</style>
