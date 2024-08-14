<template>
	<div class="container">
		<el-container>
			<el-aside class="aside" :class="visitedRoutes.expand ? 'fold' : ''">
				<Sidebar></Sidebar>
			</el-aside>
			<el-container>
				<el-header class="header" :class="visitedRoutes.expand ? 'fold' : ''">
					<Header></Header>
				</el-header>

				<el-main class="main">
					<router-view />
				</el-main>

				<el-footer class="footer" height="30px">
					<Footer></Footer>
				</el-footer>
			</el-container>
		</el-container>
	</div>
</template>

<script setup name="dashboard">
import Sidebar from '@/layouts/components/Sidebar/index.vue'
import Header from '@/layouts/components/Header/index.vue'
import Footer from '@/layouts/components/Footer/index.vue'
import { useVisitedRoutes } from '@/store/modules/tabs'

import { useRouter } from 'vue-router'
const router = useRouter()
const visitedRoutes = useVisitedRoutes()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.container {
	i {
		width: 90px;
		height: 90px;
	}

	.header {
		position: relative;
		height: 86px;
		--el-header-padding: 0 0px;
	}

	.main {
		height: calc(100vh - 86px - 30px - 30px); //动态计算长度值
		overflow-y: scroll;
		overflow-x: hidden;
		background-color: var(--mk-main-bg-color);
		@extend %scrollbar;
		margin: 15px;
		border-radius: 5px;
		// --el-main-padding: 15px;
	}

	.aside {
		background-color: var(--mk-menu-bg-color);
		height: 100vh;
		width: var(--mk-sidebar-width);
		transition: width 0.5s ease-in-out;

		// 菜单收起来的时候
		&.fold {
			width: 65px;
		}
	}

	.footer {
		--el-footer-padding: 0 0px;
		color: var(--mk-text-color);
	}
}
</style>
