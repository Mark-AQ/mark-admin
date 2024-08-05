<template>
	<div class="header">
		<div class="topBar">
			<el-scrollbar>
				<TopBar></TopBar>
			</el-scrollbar>
		</div>
		<div class="rigthInfo">
			<el-dropdown :hide-on-click="false" @command="handleCommand">
				<div class="content">
					<el-avatar
						style="margin-right: 10px"
						src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
					/>
					<span class="projectName">MarkAdmin</span>
				</div>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item command="1">个人中心</el-dropdown-item>
						<el-dropdown-item command="2">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
		<el-scrollbar>
			<TopTaps></TopTaps>
		</el-scrollbar>
	</div>
</template>

<script setup name="Header">
	import TopBar from '@/layouts/components/Header/TopBar/index.vue'
	import TopTaps from '@/layouts/components/Header/TopTaps/index.vue'
	import { ElMessage } from 'element-plus'
	import { useRouter } from 'vue-router'
	const router = useRouter()

	const handleCommand = (command) => {
		switch (command) {
			case '1':
				ElMessage(`点击了 ${command}`)
				break
			case '2':
				router.push('/login')
				break
			default:
				ElMessage(`点击了默认`)
				break
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		height: 86px;
		.topBar {
			height: 52px;
			display: flex;
			align-items: center;
		}
		.rigthInfo {
			position: absolute;
			top: 0;
			right: 10px;
			height: 52px;
			display: flex;
			align-items: center;
			.content {
				display: flex;
				align-items: center;
			}
			.projectName {
				font-weight: 500;
				font-size: 16px;
			}
		}
	}
</style>
