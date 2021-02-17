<template>
	<div>
		<el-row type="flex" justify="center">
			<el-card class="login">
				<div slot="header">
					<h1 class="title">樱花金融后台管理系统</h1>
				</div>
				<div>
					<el-form :rules="rules" :model="ruleForm" ref="ruleForm">
						<el-form-item label="用户名:" label-width="80px" prop="username">
							<el-input v-model="ruleForm.username" />
						</el-form-item>
						<el-form-item label="密码:" label-width="80px" prop="password">
							<el-input
								type="password"
								v-model="ruleForm.password"
								show-password
							/>
						</el-form-item>
						<el-form-item label-width="80px">
							<el-button
								type="primary"
								style="width: 100%"
								@click="submit('ruleForm')"
							>
								登录
							</el-button>
						</el-form-item>
					</el-form>
				</div>
			</el-card>
		</el-row>
	</div>
</template>

<script>
	import { post } from "@/utils/http";
	import { setToken } from "@/utils/auth";
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				const regPsd = /^[0-9a-zA-Z]{4,8}$/;
				if (value === "") {
					callback(new Error("请输入密码"));
				} else if (!regPsd.test(value)) {
					callback(new Error("请输入4-8位数字或者字母组合"));
				} else {
					callback();
				}
			};
			return {
				rules: {
					username: [
						{
							required: true,
							message: "请输入用户名",
						},
						{ min: 4, max: 8, message: "用户名为4-8位" },
					],
					password: [{ validator: validatePass, required: true }],
				},
				ruleForm: {
					username: "",
					password: "",
				},
			};
		},
		methods: {
			submit(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						post("/login", this.ruleForm)
							.then((res) => {
								setToken(res.token);
								this.$router.push("/");
								sessionStorage.setItem("nickname", res.nickname);
							})
							.catch((error) => {
								console.log(error);
							});
					}
				});
			},
		},
	};
</script>

<style lang="less" scoped>
	.login {
		width: 500px;
		margin-top: 150px;
		.title {
			text-align: center;
		}
	}
</style>
