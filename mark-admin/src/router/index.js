import { createRouter, createWebHistory } from 'vue-router'
const Layouts = () => import('@/layouts/index.vue')

import { useVisitedRoutes } from '@/stores/route.js'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/404',
			component: Layouts,
			component: () => import('@/components/wrong/404.vue'),
			meta: {
				hidden: true,
			},
			alias: '/:pathMatch(.*)*',
		},
		{
			path: '/login',
			component: () => import('@/views/login/index.vue'),
			meta: {
				hidden: true,
			},
		},
		{
			path: '/',
			component: Layouts,
			redirect: '/dashboard',
			meta: {
				title: '首页',
				elIcon: 'House',
			},
			name: 'Layout',
			children: [
				{
					path: '/dashboard',
					component: () => import('@/views/dashboard/index.vue'),
					name: 'Dashboard',
				},
			],
		},
		{
			path: '/store',
			component: Layouts,
			redirect: '/store/page',
			name: 'Store',
			meta: {
				title: '商城',
				elIcon: 'Filter',
			},
			children: [
				{
					path: '/store/page',
					component: () => import('@/views/store/index.vue'),
					name: 'Store',
				},
			],
		},
		{
			path: '/wealth',
			component: Layouts,
			redirect: '/wealth/a',
			meta: { title: '财富', elIcon: 'MessageBox' },
			name: 'Wealth',
			children: [
				{
					path: '/wealth/a',
					redirect: '/wealth/a/c',
					name: 'A',
					meta: { title: '页面A' },
					children: [
						{
							path: '/wealth/a/c',
							component: () => import('@/views/wealth/index2.vue'),
							meta: { title: '页面C', keepAlive: true },
							name: 'C',
						},
						{
							path: '/wealth/a/d',
							component: () => import('@/views/wealth/index3.vue'),
							meta: { title: '页面D', keepAlive: true },
							name: 'D',
						},
					],
				},
				{
					path: '/wealth/b',
					component: () => import('@/views/wealth/index1.vue'),
					meta: { title: '页面B' },
					name: 'B',
				},
			],
		},
		{
			path: '/client',
			component: Layouts,
			redirect: '/client/home',
			meta: { title: '客户', elIcon: 'Finished' },
			name: 'Client',
			children: [
				{
					path: '/client/home',
					component: () => import('@/views/client/index.vue'),
					name: 'Client',
				},
			],
		},
		{
			path: '/reservation',
			component: Layouts,
			redirect: '/reservation/home',
			meta: { title: '预约', elIcon: 'PieChart' },
			name: 'Reservation',
			children: [
				{
					path: '/reservation/home',
					component: () => import('@/views/reservation/index.vue'),
					name: 'Reservation',
				},
			],
		},
		{
			path: '/train',
			component: Layouts,
			redirect: '/train/home',
			meta: { title: '培训', elIcon: 'ChatSquare' },
			name: 'Train',
			children: [
				{
					path: '/train/home',
					component: () => import('@/views/train/index.vue'),
					name: 'Train',
				},
			],
		},
		{
			path: '/setting',
			component: Layouts,
			redirect: '/setting/home',
			meta: { title: '系统', elIcon: 'Setting' },
			name: 'Setting',
			children: [
				{
					path: '/setting/home',
					component: () => import('@/views/setting/index.vue'),
					name: 'Setting',
				},
			],
		},
	],
})

router.afterEach((to, from) => {
	const store = useVisitedRoutes()

	let result = false
	const routes = store.routes
	// 判断点钱点击路由是否存在
	routes.forEach((item) => {
		if (item.fullPath === to.fullPath) {
			result = true
		}
	})

	if (!result) {
		// 不包含
		to.isSele = true
		// 设置其它为不选中状态
		routes.forEach((m) => {
			m.isSele = false
		})
		const { fullPath, meta, isSele } = to
		if (fullPath === '/login') return
		store.addRoute({ fullPath, meta, isSele })
	} else {
		// 包含
		routes.forEach((item) => {
			if (item.fullPath === to.fullPath) {
				item.isSele = true
			} else {
				item.isSele = false
			}
		})
	}
})

export default router
