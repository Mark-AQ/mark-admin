import VueSetuoExtend from 'vite-plugin-vue-setup-extend'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
	//获取各种环境下的对应的变量
	const env = loadEnv(mode, process.cwd())
	console.log(env.VITE_BASE_API)
	return {
		base: env.VITE_PUBLIC_PATH, // 开发或生产环境服务的公共基础路径
		plugins: [vue(), VueSetuoExtend()],
		resolve: {
			alias: {
				'@': '/src', // 将@别名指向src目录
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@/assets/styles/mixins.scss" as *;`,
				},
			},
		},
		server: {
			// 设置代理，根据我们项目实际情况配置
			proxy: {},
		},
	}
})
