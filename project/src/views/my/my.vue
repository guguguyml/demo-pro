<template>
	<div>
		<el-row :gutter="16">
			<!-- 左边个人中心 -->
			<el-col :span="7">
				<el-card>
					<!-- 头像 -->
					<div class="head">
						<el-avatar
							src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
							:size="120"
						>
						</el-avatar>
						<h4>Serati Ma</h4>
						<p>海纳百川，有容乃大</p>
						<div class=" text-left">
							<p><i class="el-icon-postcard"></i> 交互专家</p>
							<p>
								<i class="el-icon-s-check"></i>
								蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED
							</p>
							<p><i class="el-icon-house"></i> 浙江省杭州市</p>
						</div>
					</div>
					<el-divider class="dash-left"></el-divider>
					<!-- 标签 -->
					<div>
						<el-tag
							:key="index"
							v-for="(item, index) in dynamicTags"
							color="#FBFBFB"
							class="tags"
						>
							{{ item }}
						</el-tag>
						<el-input
							class="input-new-tag"
							v-if="inputVisible"
							v-model="inputValue"
							ref="saveTagInput"
							size="small"
							@keyup.enter.native="handleInputConfirm"
							@blur="handleInputConfirm"
						>
						</el-input>
						<el-button
							v-else
							class="button-new-tag"
							size="small"
							@click="showInput"
							style="margin-left:5px;margin-top:10px;"
							>+ New Tag</el-button
						>
					</div>
					<el-divider class="dash-left"></el-divider>
					<!-- 团队 -->
					<div class="team">
						<p>团队</p>
						<el-row :gutter="16" class="mt">
							<el-col :span="12">
								<a href="#" style="font-size:14px">
									<span class="teamimg">
										<img
											src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
										/>
									</span>
									科学搬砖组
								</a>
							</el-col>
							<el-col :span="12">
								<a href="#" style="font-size:14px">
									<span class="teamimg">
										<img
											src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"
										/>
									</span>
									全组都是吴彦祖
								</a>
							</el-col>
						</el-row>
						<el-row :gutter="16" class="mt">
							<el-col :span="12">
								<a href="#" style="font-size:14px">
									<span class="teamimg">
										<img
											src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png"
										/>
									</span>
									中二少女团
								</a>
							</el-col>
							<el-col :span="12">
								<a href="http://localhost:8080/#/index" style="font-size:14px">
									<span class="teamimg">
										<img
											src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"
										/>
									</span>
									程序员日常
								</a>
							</el-col>
						</el-row>
						<el-row :gutter="16" class="mt">
							<el-col :span="12">
								<a href="#" style="font-size:14px">
									<span class="teamimg">
										<img
											src="https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png"
										/>
									</span>
									高逼格设计天团
								</a>
							</el-col>
							<el-col :span="12">
								<a href="#" style="font-size:14px">
									<span class="teamimg">
										<img
											src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"
										/>
									</span>
									骗你来学计算计
								</a>
							</el-col>
						</el-row>
					</div>
				</el-card>
			</el-col>
			<!-- 右边 -->
			<el-col :span="17">
				<el-card>
					<el-tabs v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="文章(8)" name="1"></el-tab-pane>
						<el-tab-pane label="应用(8)" name="2"></el-tab-pane>
						<el-tab-pane label="项目(8)" name="3"></el-tab-pane>
					</el-tabs>
					<keep-alive>
						<component :is="currentTabComponent" class="tab mt"></component>
					</keep-alive>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import myTabs1 from "./tabs1";
	import myTabs2 from "./tabs2";
	import myTabs3 from "./tabs3";
	export default {
		data() {
			return {
				dynamicTags: [
					"很有想法的",
					"专注设计",
					"辣~",
					"大长腿",
					"川妹子",
					"海纳百川",
				],
				inputVisible: false,
				inputValue: "",
				activeName: "1",
			};
		},
		computed: {
			currentTabComponent() {
				return "myTabs" + parseInt(this.activeName);
			},
		},
		methods: {
			// 标签添加
			showInput() {
				this.inputVisible = true;
				this.$nextTick(() => {
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},
			handleInputConfirm() {
				let inputValue = this.inputValue;
				if (inputValue) {
					this.dynamicTags.push(inputValue);
				}
				this.inputVisible = false;
				this.inputValue = "";
			},

			handleClick() {},
		},
		components: {
			myTabs1,
			myTabs2,
			myTabs3,
		},
	};
</script>

<style lang="less" scoped>
	.head {
		text-align: center;
		h4 {
			margin-top: 15px;
		}
		p {
			font-size: 14px;
			margin-top: 15px;
		}
	}
	.tags {
		margin-right: 5px;
		margin-top: 10px;
		color: #252525;
		border-color: #d9d9d9;
	}
	.button-new-tag {
		margin-left: 10px;
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
		color: #252525;
		border-color: #d9d9d9;
	}
	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		margin-top: 10px;
		vertical-align: bottom;
		color: #252525;
		border-color: #d9d9d9;
	}
	.team {
		a {
			display: block;
			margin-bottom: 24px;
			overflow: hidden;
			color: rgba(0, 0, 0, 0.85);
			white-space: nowrap;
			text-overflow: ellipsis;
			word-break: break-all;
			transition: color 0.3s;
			.teamimg {
				width: 24px;
				height: 24px;
				line-height: 24px;
				border-radius: 50%;
				margin-right: 12px;
				display: inline-block;
				overflow: hidden;
				vertical-align: middle;
				img {
					display: block;
				}
			}
		}
	}
	.team .mt:last-child {
		margin-bottom: 20px;
	}
	.dash-left {
		background: 0 0;
		border-top: 1px dashed #e8eaec;
	}
</style>
