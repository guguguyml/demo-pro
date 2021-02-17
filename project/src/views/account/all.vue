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
		<!-- 搜索框 -->
		<div class="mt">
			<el-card>
				<el-row>
					<el-col :span="8">
						<el-input v-model="searchValue" placeholder="">
							<el-button
								slot="append"
								icon="el-icon-search"
								@click="search"
							></el-button>
						</el-input>
					</el-col>
					<el-col :span="8" class="text-right" :offset="8">
						<el-button type="primary" @click="newAdd">新建角色</el-button>
						<el-button type="" :disabled="!selectedRows.length">启动</el-button>
						<el-button type="" :disabled="!selectedRows.length">冻结</el-button>
						<el-button type="" :disabled="!selectedRows.length">删除</el-button>
					</el-col>
				</el-row>
			</el-card>
		</div>
		<!-- 表格 -->
		<div class="mt">
			<el-card>
				<el-table
					:data="tableData"
					style="width: 100%"
					@select="select"
					@select-all="selectAll"
				>
					<el-table-column type="selection" width="50"> </el-table-column>
					<el-table-column
						type="index"
						width="50"
						label="序号"
					></el-table-column>
					<el-table-column
						prop="account"
						label="账户"
						width="80"
					></el-table-column>
					<el-table-column
						prop="name"
						label="用户名"
						width="80"
					></el-table-column>
					<el-table-column
						prop="character"
						label="角色"
						width="80"
					></el-table-column>
					<el-table-column prop="remark" label="备注"></el-table-column>
					<el-table-column prop="reason" label="创建原因"></el-table-column>
					<el-table-column prop="status" label="状态" width="80">
						<template slot-scope="scope">
							{{ scope.row.status == 1 ? "已启用" : "未启用" }}
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" @click="edit(scope.row)">编辑</el-button>
							<el-button size="mini" type="danger">删除</el-button>
							<el-button size="mini">
								{{ scope.row.status == 1 ? "禁用" : "启用" }}
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-card>
		</div>
		<!-- 弹窗 -->
		<div>
			<el-dialog title="提示" :visible="visible" @close="close">
				<el-form :model="form" :rules="rules" ref="forms">
					<el-form-item label="角色" label-width="100px" prop="character">
						<el-select v-model="form.character" placeholder="请选择角色">
							<el-option value="1" label="业务人员"></el-option>
							<el-option value="2" label="审核人员"></el-option>
							<el-option value="3" label="风控经理"></el-option>
							<el-option value="4" label="管理员"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="备注" label-width="100px" prop="remark">
						<el-input v-model="form.remark" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="创建原因" label-width="100px" prop="reason">
						<el-input
							v-model="form.reason"
							auto-complete="off"
							type="textarea"
						></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="visible = false">取 消</el-button>
					<el-button type="primary" @click="onOk">确 定</el-button>
				</div>
			</el-dialog>
		</div>
		<!-- 分页 -->
		<div>
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="params.page"
				:page-sizes="[10, 20, 30, 40, 50]"
				:page-size="params.size"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total"
			>
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import breadCrumb from "@/mixins/breadCrumb";
	import { get } from "@/utils/http";
	export default {
		data() {
			return {
				searchValue: "",
				tableData: [],
				total: 0,
				selectedRows: [],
				visible: false,
				form: {
					character: "",
					remark: "",
					reason: "",
				},
				rules: {
					character: [
						{ required: true, message: "请选择角色", trigger: "change" },
					],
					remark: [{ required: true, message: "请输入备注", trigger: "blur" }],
					reason: [
						{ required: true, message: "请输入创建原因", trigger: "blur" },
					],
				},
				params: {
					page: 2,
					size: 10,
				},
			};
		},
		mounted() {
			this.list();
			// console.log(this.list());
		},
		methods: {
			// 搜索框按钮
			search() {},
			// mock拿到表格数据
			list() {
				get("/all").then((res) => {
					// console.log(res.data);
					this.tableData = res.data.list;
					this.total = res.data.total;
				});
			},
			// 全选判断禁用启用
			select(selection) {
				this.selectedRows = selection;
			},
			selectAll(selection) {
				this.selectedRows = selection;
			},
			// 新建角色弹框
			newAdd() {
				this.visible = true;
				this.$nextTick(() => {
					this.form = {
						character: "",
						remark: "",
						reason: "",
					};
				});
			},
			// 新建角色弹框关闭
			close() {
				this.visible = false;
			},
			onOk() {
				this.$refs["forms"].validate((valid) => {
					if (valid) {
						this.$message.success("创建成功");
						this.list();
						this.visible = false;
						this.$refs["forms"].resetFields();
					}
				});
			},
			// 编辑
			edit(row) {
				this.visible = true;
				this.form.character = row.character;
				this.form.remark = row.remark;
				this.form.reason = row.reason;
			},
			// 分页
			handleSizeChange(size) {
				console.log(1, size);
			},
			handleCurrentChange(page) {
				console.log(2, page);
			},
		},
		mixins: [breadCrumb],
	};
</script>

<style lang="less" scoped></style>
