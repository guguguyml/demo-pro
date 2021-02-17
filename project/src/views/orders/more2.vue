<template>
	<div>
		<!-- 图标 -->
		<div class="mt " style="text-align: center;">
			<i class="el-icon-circle-check icon"></i>
			<h4>操作成功</h4>
			<h5>预计两小时内到账</h5>
			<div class="mt">
				<el-button type="primary" @click="add">新建订单</el-button>
				<el-button>查看订单</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
			};
		},
		methods: {
			add() {
				this.$emit("par", this.active);
			},
		},
	};
</script>

<style lang="less" scoped>
	.icon {
		font-size: 100px;
		color: #52c41a;
		margin-top: 20px;
	}
	h4 {
		font-size: 24px;
		margin-top: 25px;
	}
	h5 {
		color: rgba(0, 0, 0, 0.45);
		font-size: 14px;
		line-height: 1.6;
		margin-top: 10px;
	}
</style>
