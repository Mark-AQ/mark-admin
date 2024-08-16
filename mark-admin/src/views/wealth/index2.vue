<template>
    <div class="image-container">
        <img v-for="(image, index) in images" :key="index" :src="image.src" @mousewheel="flyAway(index, $event)"
            class="fly-image" :class="{ 'fly-out': flyingImages.includes(index) }" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8' },
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0' }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5'
    }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061'
    }, { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8' },
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0' }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5'
    }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061'
    }, { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8' },
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0' }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5'
    }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061'
    }, { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8' },
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0' }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5'
    }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061'
    }, { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8' },
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0' }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5'
    }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061'
    }, { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8' },
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0' }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5'
    }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061'
    }, { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8' },
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0' }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5'
    }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061'
    }, { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8' },
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0' }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5'
    }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061'
    }, { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8' },
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0' }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5'
    }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061'
    }, { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8' },
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0' }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5'
    }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061'
    }, { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8' },
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0' }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5'
    }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061'
    }, { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8' },
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0' }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5'
    }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061'
    }, { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8' },
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0' }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5'
    }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061'
    }, { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6f053c8b74181faf863835ccd77d78dc4f488d15d98533ebe1d9cf96d02fee8' },
    { src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09a9a89fca6744716edf592f0db168f83b7f56c2b2b387d34a1dffdc9bd7bbf0' }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06da4409956fb4c6b6f9da9f834acdbeb0cd6111aef786f1e5c0691fb1f611a5'
    }, {
        src: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbb3e1f0bb31e312ca579e3faab5772f22b33772980eeef3f4dce611446c38061'
    },
]);

const flyingImages = ref([]);

function flyAway(index, event) {
    if (!flyingImages.value.includes(index)) {
        flyingImages.value.push(index);
        setTimeout(() => {
            flyingImages.value = flyingImages.value.filter(i => i !== index);
            images.value.splice(index, 1);
        }, 1000);  
    }
}
</script>

<style scoped>
.image-container {
    position: relative;
    width: 100%;
    height: 80vh;
    overflow: hidden;
}



.fly-image {
    cursor: pointer;
    position: absolute;
    bottom: 60px;
    left: calc(50% - 39px);
    width: 178px;
    height: 78px;
    transition: transform 1s linear;
    transform: rotate(90deg);
}

.fly-out {
    transform: translateY(-100vh);
}
</style>
