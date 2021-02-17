<template>
	<div>
		<el-card>
			<!-- 步骤条 -->
			<el-steps :active="active" finish-status="success">
				<el-step title="填写订单"> </el-step>
				<el-step title="确认订单"></el-step>
				<el-step title="提交订单"></el-step>
			</el-steps>
			<!-- 步骤条组件 -->

			<component :is="currentTabComponent" class="tab" @par="myfn"></component>
		</el-card>
	</div>
</template>

<script>
	import more0 from "./more0";
	import more1 from "./more1";
	import more2 from "./more2";

	export default {
		data() {
			return {
				active: 0,
			};
		},
		computed: {
			currentTabComponent() {
				return "more" + this.active;
			},
		},
		methods: {
			myfn(payload) {
				this.active = payload;
			},
		},
		components: {
			more0,
			more1,
			more2,
		},
	};
</script>

<style lang="less" scoped></style>
