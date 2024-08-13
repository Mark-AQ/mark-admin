<template>
	<div class="login">
		<div style="display: flex; justify-content: space-between; align-items: center">
			<div style="padding: 0 60px 0 0"></div>
			<el-form ref="ruleFormRef" :rules="rules" :model="ruleForm" label-position="left" label-width="0px"
				class="login-form">
				<h1 class="title">欢迎登录</h1>
				<el-form-item prop="phone">
					<el-input type="text" v-model="ruleForm.phone" placeholder="账号">
						<i class="user"></i>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" v-model="ruleForm.password" placeholder="密码">
						<i class="password"></i>
					</el-input>
				</el-form-item>
				<el-form-item prop="type">
					<el-checkbox v-model="ruleForm.type" value="1">记住我</el-checkbox>
				</el-form-item>
				<el-form-item style="width: 100%">
					<el-button type="primary" style="width: 100%" @click="login(ruleFormRef)">
						<span>登 录</span>
					</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script setup name="Login">
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
const router = useRouter()
const ruleFormRef = ref()
const ruleForm = reactive({
	phone: '',
	password: '',
	type: '',
})

const login = async (formEl) => {
	if (!formEl) return
	await formEl.validate((valid, fields) => {
		if (valid) {
			router.replace({
				path: '/',
			})
		} else {
			console.log('提交失败', fields)
		}
	})
}
const rules = reactive({
	phone: [
		{
			required: true,
			message: '手机号不能为空',
			trigger: 'blur',
		},
		{
			min: 3,
			max: 11,
			message: '长度应为3到11',
			trigger: 'blur',
		},
	],
	password: [
		{
			required: true,
			message: '密码不能为空',
			trigger: 'change',
		},
	],
})
</script>

<style lang="scss" scoped>
.login {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	background-image: url('https://xmkgsy.oss-cn-guangzhou.aliyuncs.com/image/resourceFile/login.png');
	background-size: cover;

	.title {
		margin: 0 auto 30px auto;
		text-align: center;
		color: #707070;
	}

	.login-form {
		border-radius: 6px;
		background: #ffffff;
		width: 385px;
		padding: 25px 25px 5px 25px;
		margin-left: 900px;

		.el-input {
			height: 38px;

			input {
				height: 38px;
			}
		}

		.input-icon {
			height: 39px;
			width: 14px;
			margin-left: 2px;
		}
	}

	.login-tip {
		font-size: 13px;
		text-align: center;
		color: #bfbfbf;
	}

	.login-code {
		width: 33%;
		display: inline-block;
		height: 38px;
		float: right;

		img {
			cursor: pointer;
			vertical-align: middle;
		}
	}
}
</style>
