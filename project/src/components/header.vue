<template>
	<div class="clearfix">
		<div class="head fr">
			<el-dropdown @command="change">
				<span class="el-dropdown-link">
					欢迎您,{{ info }} <i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="a">个人中心</el-dropdown-item>
					<el-dropdown-item command="b">修改密码</el-dropdown-item>
					<el-dropdown-item command="c">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<p class="data fr">
			今天是我在阿里的 <span>{{ days }}</span> 天
		</p>
	</div>
</template>

<script>
	import { get } from "@/utils/http";
	import { removeToken } from "@/utils/auth";
	export default {
		data() {
			return {
				time: "",
			};
		},
		computed: {
			info() {
				return sessionStorage.getItem("nickname");
			},
			days() {
				let target = new Date(this.time);
				let now = new Date();
				return Math.floor((now - target) / 1000 / 60 / 60 / 24);
			},
		},
		methods: {
			change(command) {
				if (command == "c") {
					removeToken();
					this.$router.push("/login");
				}
			},
		},
		mounted() {
			get("/in").then((res) => {
				this.time = res.time;
			});
		},
	};
</script>

<style lang="less" scoped>
	.data,
	.head {
		line-height: 60px;
		margin-left: 20px;
	}
	.data {
		span {
			color: #40a9ff;
			font-size: 24px;
		}
	}
</style>
