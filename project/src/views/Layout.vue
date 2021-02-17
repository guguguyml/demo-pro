<template>
	<div>
		<el-container>
			<el-aside width="200px" class="aside"> <nav-left></nav-left> </el-aside>
			<el-container>
				<el-header><headers> </headers></el-header>
				<el-main class="contbg">
					<keep-alive>
						<router-view v-if="$route.meta.alive"> </router-view>
					</keep-alive>
					<router-view v-if="!$route.meta.alive"> </router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import NavLeft from "@/components/navLeft";
	import Headers from "@/components/header";
	export default {
		daaa() {
			return {};
		},
		components: {
			NavLeft,
			Headers,
		},
	};
</script>

<style lang="less" scoped>
	.aside {
		height: 100vh;
		background-color: #001529;
	}
	::-webkit-scrollbar {
		display: none;
	}
	.contbg {
		background-color: #e9eef3;
		height: 80vh;
	}
</style>
