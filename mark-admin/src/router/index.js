import { createRouter, createWebHistory } from 'vue-router'
const Layouts = () => import('@/layouts/index.vue')

import { useVisitedRoutes } from '@/store/modules/tabs.js'

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
	routes: [
		{
			path: '/404',
			component: () => import('@/views/features/404.vue'),
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
			redirect: '/store/index',
			name: 'Store',
			meta: {
				title: '商城',
				elIcon: 'Filter',
			},
			children: [
				{
					path: '/store/index',
					component: () => import('@/views/store/index.vue'),
					name: 'StoreIndex',
				},
			],
		},
		{
			path: '/wealth',
			component: Layouts,
			redirect: '/wealth',
			meta: { title: '财富', elIcon: 'MessageBox' },
			name: 'Wealth',
			children: [
				{
					path: '/wealth',
					redirect: '/wealth/a/c',
					name: 'A',
					meta: { title: '页面A' },
					children: [
						{
							path: '/wealth/a/c',
							component: () => import('@/views/wealth/index2.vue'),
							meta: { title: '上划动画', keepAlive: true },
							name: 'C',
						},
						{
							path: '/wealth/a/d',
							component: () => import('@/views/wealth/index3.vue'),
							meta: { title: '红包降落', keepAlive: true },
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
			redirect: '/client/index',
			meta: { title: '客户', elIcon: 'Finished' },
			name: 'Client',
			children: [
				{
					path: '/client/index',
					component: () => import('@/views/client/index.vue'),
					name: 'ClientIndex',
				},
			],
		},
		{
			path: '/reservation',
			component: Layouts,
			redirect: '/reservation/index',
			meta: { title: '预约', elIcon: 'PieChart' },
			name: 'Reservation',
			children: [
				{
					path: '/reservation/index',
					component: () => import('@/views/reservation/index.vue'),
					name: 'ReservationIndex',
				},
			],
		},
		{
			path: '/train',
			component: Layouts,
			redirect: '/train/index',
			meta: { title: '培训', elIcon: 'ChatSquare' },
			name: 'Train',
			children: [
				{
					path: '/train/index',
					component: () => import('@/views/train/index.vue'),
					name: 'TrainIndex',
				},
			],
		},
		{
			path: '/setting',
			component: Layouts,
			redirect: '/setting/index',
			meta: { title: '系统', elIcon: 'Setting' },
			name: 'Setting',
			children: [
				{
					path: '/setting/index',
					component: () => import('@/views/setting/index.vue'),
					name: 'SettingIndex',
				},
			],
		},
	],
})

// 路由守卫
router.afterEach((to, from) => {
	const store = useVisitedRoutes()
	const routes = store.routes

	// 保存访问过的路由
	const res = routes.filter((item) => item.fullPath === to.fullPath)
	if (res.length < 1) { // 不包含
		const { fullPath, meta } = to
		if (fullPath === '/login') return
		store.addRoute({ fullPath, meta })
	}
})

export default router
