<template>
	<div class="container">
		<div class="avatar">
			<el-avatar :size="52" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
		</div>
		<el-menu
			class="elMenu"
			active-text-color="#9cccff"
			background-color="#18263e"
			:default-active="activeMenu"
			:collapse="visitedRoutes.expand"
			unique-opened
			text-color="#fff"
		>
			<Menu :menus="showRoutes"></Menu>
		</el-menu>
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import Menu from './menu.vue'
	import { useVisitedRoutes } from '@/store/modules/tabs'
	const router = useRouter()
	const route = useRoute()
	const visitedRoutes = useVisitedRoutes()

	const activeMenu = computed(() => {
		const { path } = route
		return path
	})

	const showRoutes = computed(() => router.options.routes.filter((item) => (item.meta ? !item.meta.hidden : true)))
</script>

<style lang="scss" scoped>
	.container {
		.avatar {
			width: 100%;
			height: 86px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.el-menu {
			border: none;
			transition: all 10ms;
		}
		.elMenu {
			background: 0;
			width: 100%;
			transition: width 0.25s;
			-webkit-transition: width 0.25s;
			-moz-transition: width 0.25s;
			-webkit-transition: width 0.25s;
			-o-transition: width 0.25s;
			span {
				padding-left: 8px;
				font-size: 16px;
				text-align: center;
			}
		}
		.icon {
			width: 20px;
			height: 20px;
			flex-shrink: 0;
		}
		.item {
			width: 100%;
			height: 96px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.action {
			background-color: #18263e;
			color: #9cccff;
		}
	}
</style>
