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

				<el-footer height="30px">
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
	import { useVisitedRoutes } from '@/stores/route'

	import { useRouter } from 'vue-router'
	const router = useRouter()
	const visitedRoutes = useVisitedRoutes()
</script>

<style lang="scss" scoped>
	@import '@/assets/mixins.scss';
	.container {
		.header {
			position: relative;
			height: 86px;
			background: white;
			--el-header-padding: 0 10px;
			// box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
		}
		.main {
			width: 100%;
			height: calc(100vh - 86px - 30px); //动态计算长度值
			overflow-y: scroll;
			overflow-x: hidden;
			@extend %scrollbar;
			background: #f1f1f1;
			--el-main-padding: 10px;
		}
		.aside {
			background: #1c2c49;
			height: 100vh;
			width: 180px;
			transition: width 0.5s ease-in-out;
			&.fold {
				width: 65px;
			}
		}
	}
</style>
