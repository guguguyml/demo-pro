<template>
	<div>
		<h4>樱花金融后台管理系统</h4>
		<el-menu
			background-color="#001529"
			text-color="#ffffff"
			:router="true"
			:default-active="$route.path"
		>
			<menus
				v-for="(item, index) in menuData"
				:key="index"
				:menu="item"
			></menus>
		</el-menu>
	</div>
</template>

<script>
	import menus from "./menu";
	import { get } from "@/utils/http";
	export default {
		data() {
			return {
				menuData: [],
			};
		},
		mounted() {
			get("/menu").then((res) => {
				this.menuData = res.data;
			});
		},
		components: {
			menus,
		},
	};
</script>

<style lang="less" scoped>
	h4 {
		margin-top: 20px;
		color: #ffffff;
		text-align: center;
	}
</style>
