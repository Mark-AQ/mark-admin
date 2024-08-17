<template>
    <div class="container">
        <div class="result">恭喜你得到:{{ selectedSlice?.text }}</div>
        <div class="circle-container">
            <svg :style="{ transform: `rotate(${rotation}deg)` }" viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(100, 100)" stroke="#fff" stroke-width="1">
                    <template v-for="(slice, index) in slices" :key="index">
                        <path :d="getSlicePath(index)" :fill="slice.color"
                            :class="highlightedIndex === index ? 'highlighted' : ''" />
                        <text :class="highlightedIndex === index ? 'highlighted' : ''"
                            :transform="getTextTransform(index)" text-anchor="middle" dominant-baseline="middle"
                            fill="#fff" font-size="12">
                            {{ slice.text }}
                        </text>

                    </template>
                </g>
            </svg>
        </div>
        <button @click="spinCircle" :disabled="spinning">开始游戏</button>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const slices = [
    { color: '#FF5733', text: '奖品1' },
    { color: '#33FF57', text: '奖品2' },
    { color: '#3357FF', text: '奖品3' },
    { color: '#FF33A6', text: '奖品4' },
    { color: '#A633FF', text: '奖品5' },
    { color: '#33FFF3', text: '奖品6' }
];

const rotation = ref(0);
const spinning = ref(false);
const selectedSlice = ref(null);
const highlightedIndex = ref(null);

const sliceAngle = 360 / slices.length;

const getSlicePath = (index) => {
    const startAngle = sliceAngle * index - sliceAngle / 2 - 90;  // 偏移，使中间角度对准12点钟方向
    const endAngle = sliceAngle * (index + 1) - sliceAngle / 2 - 90;

    const startX = Math.cos((startAngle * Math.PI) / 180) * 100;
    const startY = Math.sin((startAngle * Math.PI) / 180) * 100;
    const endX = Math.cos((endAngle * Math.PI) / 180) * 100;
    const endY = Math.sin((endAngle * Math.PI) / 180) * 100;

    return `M 0 0 L ${startX} ${startY} A 100 100 0 0 1 ${endX} ${endY} Z`;
};

const getTextTransform = (index) => {
    const angle = sliceAngle * index - 90;  // 使文本位于扇形中间
    const x = Math.cos((angle * Math.PI) / 180) * 60;
    const y = Math.sin((angle * Math.PI) / 180) * 60;
    return `translate(${x}, ${y}) rotate(${angle})`;
};

const calculateSelectedSlice = (finalRotation) => {
    const normalizedRotation = (finalRotation % 360 + 360) % 360;
    const pointerAngle = (normalizedRotation + 90) % 360;
    const selectedIndex = Math.floor(pointerAngle / sliceAngle) % slices.length;
    selectedSlice.value = slices[selectedIndex];
    highlightedIndex.value = selectedIndex;
};

const resetGame = () => {
    rotation.value = 0;
    selectedSlice.value = null;
    spinning.value = false;
    highlightedIndex.value = null;
};

const spinCircle = () => {
    resetGame();

    if (spinning.value) return;
    spinning.value = true;

    let spins = 10;
    let totalRotation = spins * 360;
    let duration = 4000;

    const finalRotation = totalRotation + Math.floor(Math.random() * 360);
    const start = performance.now();

    const animateSpin = () => {
        const step = (timestamp) => {
            let progress = Math.min((timestamp - start) / duration, 1);
            progress = progress * (2 - progress);
            rotation.value = progress * finalRotation;
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                calculateSelectedSlice(rotation.value);
                spinning.value = false;
            }
        };

        requestAnimationFrame(step);
    };

    animateSpin();
};
</script>

<style lang="scss" scoped>
.container {
    width: 500px;
    height: 600px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .circle-container {
        width: 400px;
        height: 400px;

        svg {
            width: 100%;
            height: 100%;
        }
    }

    button {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
    }

    button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    .highlighted {
        font-size: 22px;
        font-weight: bold;
        text-shadow: 4px 4px 4px #3106f2;
        fill: #3106f2;
        animation: cAnimation 2s infinite;
    }

    @keyframes cAnimation {
        0% {
            fill: #3106f2;
            font-size: 12px;
            color: white;
        }

        50% {
            fill: #6f55e0;
            font-size: 38px;
            color: red;
        }

        100% {
            fill: #3106f2;
            font-size: 12px;
            color: white;
        }
    }

    .result {
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 32px;
        color: #ffffff;

    }
}
</style>
