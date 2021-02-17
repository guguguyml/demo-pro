<template>
	<div>
		<!-- 面包屑 -->
		<div>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item v-for="(item, index) in breadList" :key="index">
					{{ item }}
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!-- 搜索 -->
		<div class="mt">
			<el-card>
				<el-row :gutter="16">
					<el-col :span="5">
						<el-input
							v-model.trim="params.searchValue"
							placeholder="产品名称"
						/>
					</el-col>
					<el-col :span="5">
						<el-select
							v-model="params.rate"
							placeholder="利率"
							style="width:100%"
						>
							<el-option label="3.8%" value="3.8">3.8</el-option>
							<el-option label="3.9%" value="3.9">3.9</el-option>
							<el-option label="4.0%" value="3.8">4.0</el-option>
							<el-option label="4.1%" value="3.8">4.0</el-option>
						</el-select>
					</el-col>
					<el-col :span="9">
						<el-date-picker
							v-model="params.value1"
							type="daterange"
							range-separator="至"
							start-placeholder="开始日期"
							end-placeholder="结束日期"
							style="width:100%"
						>
						</el-date-picker>
					</el-col>
					<el-col :span="5">
						<el-button type="primary" @click="search">查询</el-button>
						<el-button type="primary" @click="reset">重置</el-button>
						<span class="el-dropdown-link" @click="toggle">
							{{ advanced ? "收起" : "展开" }}
							<i :class="'el-icon-arrow-' + (advanced ? 'up' : 'down')"></i>
						</span>
					</el-col>
				</el-row>
				<el-row :gutter="16" class="mt" v-show="advanced">
					<el-col :span="5">
						<el-input v-model.trim="params.leibie" placeholder="产品类别" />
					</el-col>
					<el-col :span="5">
						<el-input v-model.trim="params.fenqi" placeholder="最高分期数" />
					</el-col>
					<el-col :span="9">
						<el-input placeholder="状态" v-model.trim="params.status" />
					</el-col>
				</el-row>
			</el-card>
		</div>
		<!-- 表格数据 -->
		<div class="mt">
			<el-card>
				<el-table
					:data="tableData"
					style="width: 100%"
					@selection-change="handleSelectionChange"
				>
					<el-table-column
						type="index"
						label="序号"
						width="50"
					></el-table-column>
					<el-table-column
						prop="name"
						label="产品名称"
						width="80"
					></el-table-column>
					<el-table-column
						prop="type"
						label="产品类别"
						width="80"
					></el-table-column>
					<el-table-column
						prop="rate"
						label="利率"
						width="50"
					></el-table-column>
					<el-table-column
						prop="date"
						label="开放日期"
						width="100"
					></el-table-column>
					<el-table-column prop="status" label="状态" width="80">
						<template slot-scope="scope">
							<el-tag type="success" v-if="scope.row.status == 1" effect="dark">
								已启用
							</el-tag>
							<el-tag type="danger" v-else effect="dark">已禁用</el-tag>
						</template>
					</el-table-column>
					<el-table-column
						prop="highest"
						label="最高分期数(月)"
						width="120"
					></el-table-column>
					<el-table-column
						prop="number"
						label="申请客户数量"
						width="120"
					></el-table-column>
					<el-table-column
						prop="total"
						label="累计签约金额"
						width="120"
					></el-table-column>
					<el-table-column prop="average" label="件均"></el-table-column>
					<el-table-column prop="remark" label="操作">
						<template slot-scope="scope">
							<el-button
								size="mini"
								v-if="scope.row.status == 2"
								type="primary"
								@click="handleEdit(scope.row)"
								>启用</el-button
							>
							<el-button
								size="mini"
								v-else
								type="danger"
								@click="handleDelete(scope.row.account)"
								>停用</el-button
							>
							<el-button
								size="mini"
								type="primary"
								@click="detail(scope.row.name)"
								>详情</el-button
							>
						</template>
					</el-table-column>
				</el-table>
			</el-card>
		</div>
	</div>
</template>

<script>
	import breadCrumb from "@/mixins/breadCrumb";
	import moment from "moment";
	import { get } from "@/utils/http";
	export default {
		mixins: [breadCrumb],
		data() {
			return {
				params: {
					searchValue: "",
					rata: "",
					value1: [],
					leibie: "",
					fenqi: "",
					status: "",
				},
				advanced: false,
				tableData: [],
				total: 0,
			};
		},
		mounted() {
			this.list();
		},
		methods: {
			toggle() {
				this.advanced = !this.advanced;
			},
			search() {
				// post请求
				let start = this.params.value1[0];
				// moment(start).valueOf() 时间戳
				moment(start).format("YYYY-MM-DD");
			},
			reset() {
				this.params.value1 = [new Date("2020-12-09"), new Date()];
			},
			// 请求表格数据
			list() {
				get("/productList").then((res) => {
					this.tableData = res.data.list;
					this.total = res.data.total;
				});
			},
			handleSelectionChange() {},
			handleEdit() {},
			handleDelete() {},
			// 详情
			detail(name) {
				sessionStorage.setItem("name", name);
				this.$router.push("/product/detail");
			},
		},
	};
</script>

<style lang="less" scoped>
	.el-dropdown-link {
		cursor: pointer;
		margin-left: 5px;
	}
</style>
