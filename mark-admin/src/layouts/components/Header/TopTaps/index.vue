<template>
	<div class="container">
		<div style="margin-right: 10px" v-for="(item, idx) in tags" :key="idx">
			<el-tag :closable="item.meta.title !== '首页'" effect="plain"
				:type="isActive(item.fullPath) ? 'primary' : 'info'" @click="tap(item)" @close="delItem(item)">
				{{ item.meta.title }}
			</el-tag>
		</div>

	</div>
</template>

<script setup name="tags">
import { ref, computed } from 'vue'
import { useVisitedRoutes } from '@/store/modules/tabs.js'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const store = useVisitedRoutes()
// 函数判断路径是否匹配
const isActive = (path) => {
	return route.fullPath === path;
};

let tags = ref(store.routes)

const tap = (enevt) => {
	router.push(enevt.fullPath)
}

const delItem = (event) => {
	store.deleRoute(event, isActive(event.fullPath))
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	align-items: center;
	height: 34px;
	margin-left: 15px;

	.el-tag {
		--el-tag-font-size: 13px;
		padding: 0 10px;
	}
}
</style>
