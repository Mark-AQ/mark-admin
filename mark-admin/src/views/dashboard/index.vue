<template>
  <div class="container" v-for="i in 20" :key="i">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
  background-color: var(--mk-main-bg-color);
  margin-bottom: 15px;

  .el-carousel__item h3 {
    display: flex;
    justify-content: center;
    color: var(--mk-text-color);
    line-height: 300px;
    font-size: 180px;
    margin: 0;
    padding: 0;
  }
}

.container:last-child {
  margin-bottom: 0px;
}
</style>