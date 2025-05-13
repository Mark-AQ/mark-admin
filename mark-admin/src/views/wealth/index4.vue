<template>
  <div class="container">
    <div class="wheel">
      <LuckyWheel2 />
    </div>
    <div class="wheel">
      <LuckyWheel1 />
    </div>
    <div>
      <LuckyWheel ref="myLucky" width="300px" height="300px" :prizes="prizes" :blocks="blocks" :buttons="buttons"
        @start="startCallback" @end="endCallback" />
    </div>
    <div>

    </div>
  </div>
</template>

<script setup>
import LuckyWheel2 from '@/components/LuckyWheel.vue';
import LuckyWheel1 from '@/components/LuckyWheel1.vue';
import { ref } from 'vue';
const myLucky = ref(null)
const blocks = ref([{ padding: '10px', background: '#869cfa' }])
const prizes = ref([
  { fonts: [{ text: '谢谢惠顾', top: '20px' }], background: '#e9e8fe' },
  { fonts: [{ text: 'IPhone 13 Pro', top: '20px' }], background: '#b8c5f2' },
  { fonts: [{ text: '520红包', top: '20px' }], background: '#e9e8fe' },
  { fonts: [{ text: '么么哒一个', top: '20px' }], background: '#b8c5f2' },
  { fonts: [{ text: '口红一支', top: '20px' }], background: '#e9e8fe' },
  { fonts: [{ text: '香水一瓶', top: '20px' }], background: '#b8c5f2' },
  { fonts: [{ text: '清空购物车', top: '20px' }], background: '#e9e8fe' },
  { fonts: [{ text: '洗袜子一个月', top: '20px' }], background: '#b8c5f2' },
])
const buttons = ref([{
  radius: '25%',
  background: '#8a9bf3',
  pointer: true,
  fonts: [{ text: '开始', top: '-10px' }]
}])

// 点击抽奖按钮会触发star回调
const startCallback = () => {
  // 调用抽奖组件的play方法开始游戏
  myLucky.value.play()
  // 模拟调用接口异步抽奖
  setTimeout(() => {
    // 假设后端返回的中奖索引是0
    const index = Math.floor(Math.random() * 9); // 生成 0 到 8 的随机整数
    // 调用stop停止旋转并传递中奖索引
    myLucky.value.stop(index)
  }, 3000)
}
// 抽奖结束会触发end回调
const endCallback = (prize) => {
  console.log(prize)
}


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
