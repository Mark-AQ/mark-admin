<template>
	<div class="container">
		<div class="logoBox">
			<el-avatar :size="52" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
			<i v-if="!visitedRoutes.expand" class="iconfont icon-logo"></i>

		</div>
		<el-menu class="elMenu" active-text-color="#9cccff" background-color="#18263e" :default-active="activeMenu"
			:collapse="visitedRoutes.expand" unique-opened text-color="#fff">
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
	.logoBox {
		width: 100%;
		height: 86px;
		display: flex;
		justify-content: center;
		align-items: center;

		.iconfont {
			font-size: 28px;
		}
	}

	:deep(.el-menu) {
		border: none;
		transition: all 10ms;
		background-color: transparent !important;
		--el-menu-text-color: var(--mk-menu-text-color) !important;
	}

	:deep(.el-menu-item.is-active) {
		color: var(--mk-menu-active-color);
		background-color: var(--mk-menu-hover-color);
	}

	:deep(.el-menu-item:hover) {
		background-color: var(--mk-menu-hover-color);
		color: var(--mk-menu-active-color);
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

}
</style>
