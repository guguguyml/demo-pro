<template>
	<div>
		<!-- 警告 -->
		<el-alert
			title="确认转账后，资金将直接打入对方账户，无法退回。"
			type="warning"
			center
			show-icon
			class="alert"
		>
		</el-alert>
		<!-- 表单 -->
		<el-row class="product-detail mt">
			<el-col :span="8">
				<p>姓名:{{ lists.name }}</p>
				<p>消费类型:{{ lists.region }}</p>
				<p>电话:{{ lists.telephone }}</p>
				<p>地址:{{ lists.address }}</p>
				<p>收款账户: test@example.com</p>
				<p>收款人姓名: Alex</p>
				<p>转账金额: 500 元</p>
			</el-col>
		</el-row>
		<el-row class="mt">
			<el-col :span="8">
				<el-button type="primary" @click="next">确认</el-button>
				<el-button @click="back">返回</el-button>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import { get } from "@/utils/http";
	export default {
		data() {
			return {
				lists: {},
				active: 2,
				backactive: 0,
			};
		},
		mounted() {
			this.list();
		},
		methods: {
			list() {
				get("/account").then((res) => {
					this.lists = res.data.list;
				});
			},
			next() {
				this.$emit("par", this.active);
			},
			back() {
				this.$emit("par", this.backactive);
			},
		},
	};
</script>

<style lang="less" scoped>
	.alert {
		width: 80%;
		margin: auto;
	}
	.product-detail p {
		text-align: left;
		line-height: 40px;
		margin-left: 15px;
		font-size: 14px;
	}
</style>
