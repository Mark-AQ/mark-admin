<template>
	<template v-for="(item, idx) in menus" :key="idx">
		<el-menu-item v-if="!item.children" :index="item.path" @click="elSele">
			<component class="icon" :is="item.meta?.elIcon"></component>
			<span>{{ item.meta?.title }}</span>
		</el-menu-item>
		<el-menu-item v-if="item.children && item.children.length == 1" :index="item.children[0].path" @click="elSele">
			<component class="icon" :is="item.meta?.elIcon"></component>
			<span>{{ item.meta?.title }}</span>
		</el-menu-item>
		<el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
			<template #title>
				<component name="mycomoonent" class="icon" :is="item.meta?.elIcon"></component>
				<span>{{ item.meta?.title }}</span>
			</template>
			<menu :menus="item.children"></menu>
		</el-sub-menu>
	</template>
</template>

<script setup>
	import { useRouter } from 'vue-router'
	const router = useRouter()
	const props = defineProps({
		menus: {
			type: Object,
			default: [],
		},
	})
	const elSele = (val) => {
		router.push(val.index)
	}
</script>

<style lang="scss" scoped>
	span {
		padding-left: 8px;
		font-size: 16px;
		text-align: center;
	}
	.icon {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
</style>
