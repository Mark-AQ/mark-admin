<template>
  <div ref="chartRef" style="width: 100%; height: 300px;"></div>
  <br>
  <div ref="chartRef1" style=" margin-top: 5cap; width: 100%; height: 300px;"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

// 创建一个引用来保存图表的 DOM 容器
const chartRef = ref(null);
let chartInstance = null;

const chartRef1 = ref(null);
let chartInstance1 = null;

// 柱状图的数据和配置项
const chartOptions = {
  title: {
    text: '销售统计',
    subtext: '2024 年前 6 个月',
    left: 'center',
    itemStyle: {
      color: '#fff',
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['销售额'],
    bottom: 0,
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '销售额',
      type: 'bar',
      data: [12000, 7000, 40000, 5000, 8000, 20000],
      itemStyle: {
        color: '#4CAF50',
      },
    },
  ],
};

// 渐变折线图的数据和配置项
const chartOptions1 = {
  title: {
    text: '访问量统计',
    subtext: '2024 年前 6 个月',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '访问量',
      type: 'line',
      data: [200, 600, 150, 80, 300, 50],
      smooth: true, // 使线条平滑
      itemStyle: {
        color: '#4CAF50',
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(76, 175, 80, 0.5)' },
          { offset: 1, color: 'rgba(76, 175, 80, 0)' },
        ]),
      },
    },
  ],
};

onMounted(() => {
  // 初始化图表实例
  chartInstance = echarts.init(chartRef.value);

  // 设置图表的配置项和数据
  chartInstance.setOption(chartOptions);

  // 监听窗口大小变化，自动调整图表大小
  window.addEventListener('resize', resizeChart);

  // 初始化图表实例
  chartInstance1 = echarts.init(chartRef1.value);

  // 设置图表的配置项和数据
  chartInstance1.setOption(chartOptions1);

  // 监听窗口大小变化，自动调整图表大小
  window.addEventListener('resize1', resizeChart1);

});

onBeforeUnmount(() => {
  // 在组件卸载时销毁图表实例
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance1.dispose();
  }
  window.removeEventListener('resize', resizeChart);
  window.removeEventListener('resize1', resizeChart1);
});

const resizeChart = () => {
  if (chartInstance) {
    chartInstance.resize();
  }
};
const resizeChart1 = () => {
  if (chartInstance1) {
    chartInstance1.resize();
  }
};
</script>

<style scoped></style>
