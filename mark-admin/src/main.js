import '@/assets/styles/index.scss'
import 'normalize.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(createPinia())

app.use(router)

app.use(ElementPlus)

const icons = ['House', 'Service', 'MessageBox', 'Filter', 'PieChart', 'ChatSquare', 'Setting', 'Close', 'Finished', 'Fold', 'Expand', 'User', 'password', 'Sunny', 'Sunrise']
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	icons.filter((icon) => {
		if (icon === key) {
			app.component(key, component)
		}
	})
}

app.mount('#app')
