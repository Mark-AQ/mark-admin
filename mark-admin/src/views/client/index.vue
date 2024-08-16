<template>
    <div class="container">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3 justify="center">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <div class="animationBox">1</div>
        <div class="fade-element">2</div>
        <div class="spin-element">3</div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
    background-color: var(--mk-main-bg-color);
    margin-bottom: 15px;

    &last-child {
        margin-bottom: 0px;
    }

    .el-carousel__item h3 {
        display: flex;
        justify-content: center;
        color: var(--mk-text-color);
        height: 200px;
        line-height: 200px;
        font-size: 180px;
        margin: 0;
        padding: 0;
    }

    .animationBox {
        @include wh(100px, 100px);
        text-align: center;
        line-height: 100px;
        font-size: 40px;
        background-color: rgb(0, 255, 102);
        animation: move-right 2s linear infinite alternate;
    }

    .fade-element {
        margin: 0 30px;
        @include wh(100px, 100px);
        text-align: center;
        line-height: 100px;
        font-size: 40px;
        background-color: rgb(15, 49, 170);
        animation: fade 2s linear infinite alternate;
    }

    .spin-element {
        margin: 0 auto;
        @include wh(100px, 100px);
        text-align: center;
        line-height: 100px;
        font-size: 40px;
        background-color: rgb(0, 255, 102);
        animation: spin 2s linear infinite;
    }

    /* 定义名为"spin"的旋转动画 */
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        /* 开始时元素无旋转 */
        100% {
            transform: rotate(360deg);
        }

        /* 结束时元素旋转360度 */
    }

    /* 定义名为"fade"的淡入淡出动画 */
    @keyframes fade {
        0% {
            opacity: 0;
        }

        /* 开始时元素完全透明 */
        100% {
            opacity: 1;
            @include wh(300px, 300px);
        }

        /* 结束时元素完全不透明 */
    }

    @keyframes move-right {
        0% {
            transform: translateX(0);
            transform: translateY(0);
        }

        50% {
            transform: translateX(50vw);
            transform: translateY(300px);
            background-color: rgb(247, 0, 0);
        }

        100% {
            transform: translateX(calc(100vw - 100px - 210px));
        }
    }

    :deep(.el-carousel__container) {
        height: 200px;
    }


}
</style>