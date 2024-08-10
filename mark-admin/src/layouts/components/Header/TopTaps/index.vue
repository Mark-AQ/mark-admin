<template>
	<div class="container">
		<div style="margin-right: 10px" v-for="(item, idx) in tags" :key="idx">
			<el-tag :closable="!item.isSele" effect="plain" :type="item.isSele ? 'primary' : 'info'" @click="tap(item)" @close="delItem(item)">
				{{ item.meta.title }}
			</el-tag>
		</div>
	</div>
</template>

<script setup name="tags">
	import { ref } from 'vue'
	import { useVisitedRoutes } from '@/store/modules/tabs.js'
	import { useRouter } from 'vue-router'

	const store = useVisitedRoutes()
	const router = useRouter()
	let tags = ref(store.routes)

	const tap = (enevt) => {
		router.push(enevt.fullPath)
	}

	const delItem = (event) => {
		store.deleRoute(event)
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		align-items: center;
		height: 34px;
		.el-tag {
			--el-tag-font-size: 13px;
			padding: 0 10px;
		}
	}
</style>
