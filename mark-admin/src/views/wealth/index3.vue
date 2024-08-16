<template>
  <div class="rain-container">
    <div v-for="(image, index) in images" :key="index" class="image" :style="image.style"></div>
  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';

const images = ref([]);

const createImage = () => {
  const size = Math.random() * 20 + 30;
  const left = Math.random() * 180;
  const duration = Math.random() * 5 + 2;
  const rotation = Math.random() * 360;
  const imgs = ['https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8', 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0', 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5', 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061']

  const randomIndex = Math.floor(Math.random() * imgs.length); // 生成随机索引 
  const imageUrl = imgs[randomIndex];

  return {
    style: {
      width: `${173}px`,
      height: `${83}px`,
      left: `${left}%`,
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      transform: `rotate(${rotation}deg)`,
      animationDuration: `${duration}s`,
    },
  };
};

const generateImages = () => {
  for (let i = 0; i < 60; i++) {
    images.value.push(createImage());
  }
};

onMounted(() => {
  generateImages();
});
</script>

<style scoped>
.rain-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
}

.image {
  position: absolute;
  top: -50px;
  /* start position above the screen */
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes fall {
  to {
    transform: translateY(110vh);
    /* move past the bottom of the screen */
  }
}
</style>
