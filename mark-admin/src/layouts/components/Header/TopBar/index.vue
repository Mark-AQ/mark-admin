<template>
	<div class="breadcrumb">
		<el-icon class="openIcon" size="20" @click="expand">
			<template v-if="visitedRoutes.expand">
				<el-icon><Expand /></el-icon>
			</template>
			<template v-else>
				<el-icon><Fold /></el-icon>
			</template>
		</el-icon>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item v-for="m in crumbs" :key="m.path" :to="{ path: `${m.path}` }">
				{{ m.meta?.title }}
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script setup>
	import { ref, watchEffect } from 'vue'
	import { useRoute } from 'vue-router'
	import { useVisitedRoutes } from '@/stores/route'

	const visitedRoutes = useVisitedRoutes()
	const route = useRoute()
	// 伸缩菜单
	const expand = () => {
		visitedRoutes.expand = !visitedRoutes.expand
	}
	const crumbs = ref([])
	const crumbHandle = () => {
		crumbs.value = []
		//读取路由信息
		route.matched.forEach((item) => {
			crumbs.value.push(item)
		})
		//因为是挂载主页路由下，所以去掉根节点
		//   crumbs.value.shift();
	}
	watchEffect(() => {
		crumbHandle()
	})
</script>

<style lang="scss" scoped>
	.breadcrumb {
		height: 52px;
		display: flex;
		align-items: center;
		.openIcon {
			margin-right: 20px;
			width: 25px;
			height: 25px;
		}
	}
</style>
