<template>
  <div class="container">
    <router-link to="/">
      <el-button type="primary">回到首页</el-button>
    </router-link>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goBlack = () => {
  router.goBlack();
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
