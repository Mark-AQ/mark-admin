<template>
    <div class="lucky-wheel">
        <div class="wheel-container">
            <div class="wheel" :style="{ transform: `rotate(${rotation}deg)` }">
                <div class="wheel-segment" v-for="(segment, index) in segments" :key="index">
                    <span>{{ segment }}</span>
                </div>
            </div>
            <div class="pointer"></div>
        </div>
        <button @click="spinWheel" :disabled="isSpinning">开始游戏</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 转盘的选项
const segments = ['结果1', '结果2', '结果3', '结果4', '结果5', '结果6'];
const rotation = ref(0);
const isSpinning = ref(false);

// 旋转转盘
function spinWheel() {
    if (isSpinning.value) return;

    isSpinning.value = true;
    const randomSpin = Math.floor(Math.random() * 360) + 360 * 5; // 随机旋转角度 + 多转几圈
    rotation.value += randomSpin;

    // 模拟转盘结束后的处理
    setTimeout(() => {
        isSpinning.value = false;
        const selectedSegment = Math.floor(((rotation.value % 360) / 360) * segments.length);
        alert(`Congratulations! You won ${segments[selectedSegment]}`);
    }, 4000); // 旋转时间
}
</script>

<style scoped>
.lucky-wheel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 320px;
    margin: 0 auto;
}

.wheel-container {
    position: relative;
    width: 250px;
    height: 250px;
}

.wheel {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 4s cubic-bezier(0.33, 1, 0.68, 1);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
}

.wheel-segment {
    position: absolute;
    width: 50%;
    height: 50%;
    background: conic-gradient(#ff7b54, #ffcc29);
    border: 1px solid #fff;
    text-align: center;
    line-height: 125px;
    font-weight: bold;
    color: #fff;
    transform-origin: 100% 100%;
    clip-path: polygon(50% 50%, 100% 0, 100% 100%);
}

.wheel-segment:nth-child(1) {
    transform: rotate(0deg);
}

.wheel-segment:nth-child(2) {
    transform: rotate(60deg);
}

.wheel-segment:nth-child(3) {
    transform: rotate(120deg);
}

.wheel-segment:nth-child(4) {
    transform: rotate(180deg);
}

.wheel-segment:nth-child(5) {
    transform: rotate(240deg);
}

.wheel-segment:nth-child(6) {
    transform: rotate(300deg);
}

.pointer {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid #ff7b54;
    transform: translate(-50%, -90%);
    z-index: 10;
}

button {
    margin-top: 30px;
    padding: 12px 25px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    background-color: #ff7b54;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

button:not(:disabled):hover {
    background-color: #ff5722;
}
</style>