<template>
  <div class="container">
    <div class="wheel">
      <LuckyWheel />
    </div>
    <div class="wheel">
      <LuckyWheel1 />
    </div>
  </div>
</template>

<script setup>
import LuckyWheel from '@/components/LuckyWheel.vue';
import LuckyWheel1 from '@/components/LuckyWheel1.vue';

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  .wheel {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 60px;
  }
}
</style>
