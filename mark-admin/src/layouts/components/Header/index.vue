<template>
	<div class="header">
		<div class="topBar">
			<el-scrollbar>
				<Breadcrumb></Breadcrumb>
			</el-scrollbar>
		</div>
		<div class="tabs">
			<el-scrollbar>
				<TopTaps></TopTaps>
			</el-scrollbar>
		</div>
		<div class="rigthInfo">
			<div style="margin-right: 20px; padding-top: 10px" @click="toggleDark()">
				<el-icon v-if="isDark" size="25px">
					<Moon />
				</el-icon>
				<el-icon v-else size="25px">
					<Sunny />
				</el-icon>
			</div>
			<el-dropdown :hide-on-click="false" @command="handleCommand">
				<div class="content">
					<el-avatar style="margin-right: 10px"
						src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
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


	</div>
</template>

<script setup name="Header">
import Breadcrumb from '@/layouts/components/Header/Breadcrumb/index.vue'
import TopTaps from '@/layouts/components/Header/TopTaps/index.vue'
import { ElMessage } from 'element-plus'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)

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
	background-color: var(--mk-header-bg-color);

	.topBar {
		height: 52px;
		display: flex;
		align-items: center;
		margin-left: 15px;
	}

	.tabs {
		.el-scrollbar {
			height: none;
		}
	}

	.rigthInfo {
		position: absolute;
		top: 17px;
		right: 20px;
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
			color: var(--mk-text-color);
		}
	}
}
</style>
