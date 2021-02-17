<template>
	<div>
		<!-- 表单 -->
		<el-form
			:model="ruleForm"
			:rules="rules"
			ref="ruleForm"
			label-width="100px"
		>
			<el-form-item label="姓名" prop="name" style="width:400px">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="消费类型" prop="region" style="width:400px">
				<el-select
					v-model="ruleForm.region"
					placeholder="请选择消费类型"
					style="width:100%"
				>
					<el-option label="汽车消费" value="1"></el-option>
					<el-option label="房产消费" value="2"></el-option>
					<el-option label="抵押贷款" value="3"></el-option>
					<el-option label="其他" value="4"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item
				label="电话"
				prop="telephone"
				style="width:400px"
				type="number"
			>
				<el-input v-model="ruleForm.telephone"></el-input>
			</el-form-item>
			<el-form-item label="地址" prop="address" style="width:400px">
				<el-input v-model="ruleForm.address"></el-input>
			</el-form-item>
			<el-form-item label="收款账户" prop="select" style="width:400px">
				<el-select
					v-model="ruleForm.select"
					placeholder="请选择"
					style="width:100px"
				>
					<el-option label="支付宝" value="1"></el-option>
					<el-option label="微信" value="2"></el-option>
					<el-option label="银行账户" value="3"></el-option> </el-select
				><el-input v-model="ruleForm.account" style="width:200px"> </el-input>
			</el-form-item>
			<el-form-item label="收款人姓名" prop="payee" style="width:400px">
				<el-input v-model="ruleForm.payee"></el-input>
			</el-form-item>
			<el-form-item label="转账金额" prop="money" style="width:400px">
				<el-input v-model="ruleForm.money"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="next('ruleForm')">
					下一步
				</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					name: "",
					region: "",
					address: "",
					telephone: "",
					payee: "Alex",
					money: "￥ 500",
					account: "test@example.com",
					select: "",
				},

				rules: {
					name: [
						{ required: true, message: "请输入姓名", trigger: "blur" },
						{
							min: 2,
							max: 3,
							message: "长度在 2 到 3 个字符",
							trigger: "blur",
						},
					],
					telephone: [
						{ required: true, message: "请输入电话", trigger: "blur" },
						{ min: 11, max: 11, message: "情输入正确电话", trigger: "blur" },
					],
					region: [
						{ required: true, message: "请选择消费类型", trigger: "change" },
					],
					select: [
						{
							required: true,
							message: "请选择支付方式",
							trigger: "change",
						},
					],
					address: [{ required: true, message: "请输入地址", trigger: "blur" }],
				},
				active: 1,
			};
		},
		methods: {
			next(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$emit("par", this.active);
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
		},
	};
</script>

<style lang="less" scoped></style>
