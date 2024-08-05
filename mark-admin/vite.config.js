
import VueSetuoExtend from 'vite-plugin-vue-setup-extend'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  base: './',   // 开发或生产环境服务的公共基础路径
  plugins: [
    vue(),
    VueSetuoExtend()
  ],
  resolve: {
    alias: {
      // 添加一个别名配置
      '@': '/src' // 将@别名指向src目录
    }
  }
})
