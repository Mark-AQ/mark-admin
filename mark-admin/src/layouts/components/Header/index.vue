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
			<div class="theme" @click="toggleDark()">
				<el-icon v-if="!isDark" size="25px">
					<Sunrise />
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
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
const router = useRouter()

const isDark = ref(false)
const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
	isDark.value = savedTheme === 'dark'
} else {
	// prefers-color-scheme 设置默认的配色方案
	isDark.value = window.matchMedia(`(prefers-color-scheme: light)`).matches
}
const applyTheme = () => {
	const theme = isDark.value ? 'dark' : 'light';
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
}

watch(isDark, applyTheme, { immediate: true });

const toggleDark = () => {
	isDark.value = !isDark.value
}

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
		top: 16px;
		right: 20px;
		height: 52px;
		display: flex;
		align-items: center;

		.theme {
			margin-right: 20px;
			@include wh(30px, 30px);
			display: flex;
			justify-content: center;
			align-items: center;

			&:hover {
				border-radius: 100%;
				box-shadow: 0 0 10px 5px rgba(245, 176, 176, 0.5);
			}
		}
	}

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
</style>
