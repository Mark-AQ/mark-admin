import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '@/router'

// 保存访问过的路由
export const useVisitedRoutes = defineStore('visited-routes', () => {
	// 添加一个首页默认的路由tag
	const routes = ref([
		{
			fullPath: '/dashboard',
			meta: { title: '首页', elIcon: 'House' },
			isSele: true,
		},
	])

	const addRoute = (route) => {
		routes.value.push(route)
	}

	const deleRoute = (route, isActive) => {
		let index = routes.value.indexOf(route)
		routes.value.splice(index, 1)
		if (isActive) { // 如果删除的是当前选中路由 路由选中需要选中前一位
			let currentRoute = routes.value[index - 1]
			router.push(currentRoute.fullPath)
		}
	}
	// 菜单栏是否伸缩
	const expand = ref(false)

	return {
		routes,
		addRoute,
		deleRoute,
		expand,
	}
})
