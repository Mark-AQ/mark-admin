<template>
  <el-watermark :width="130" :height="30" :number="-50" image="https://element-plus.org/images/element-plus-logo.svg">
    <div class="container"></div>
  </el-watermark>
</template>

<style lang="scss" scoped>
.container {
  @include wh(100%, 900px);
  
}
</style>