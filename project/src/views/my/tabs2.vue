<template>
	<div>
		<el-row :gutter="16">
			<el-col :span="6" v-for="(item, index) in lists" :key="index" class="mt">
				<el-card shadow="hover" :body-style="{ padding: '0px' }">
					<div style="margin:20px">
						<div class="fl avatar text-right">
							<el-avatar
								:size="24"
								src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
							></el-avatar>
						</div>
						<div class="fl introduce">
							<p class="name">{{ item.name }}</p>
							<div class="clearfix">
								<div class="fl account">
									<p>活跃用户</p>
									<p>
										{{ item.num }}
										<span>万</span>
									</p>
								</div>
								<div class="fl account">
									<p>新增用户</p>
									<p>
										{{ item.numplus }}
									</p>
								</div>
							</div>
						</div>
						<div class="clear"></div>
					</div>
					<ul class=" options">
						<li class="fl">
							<el-popover
								placement="top-start"
								width="150"
								trigger="hover"
								content="下载"
							>
								<i class="el-icon-download" slot="reference"></i>
							</el-popover>
						</li>
						<li class="fl">
							<el-popover
								placement="top-start"
								width="150"
								trigger="hover"
								content="编辑"
							>
								<i class="el-icon-edit" slot="reference"></i>
							</el-popover>
							<!-- <span style=""> |</span> -->
						</li>
						<li class="fl">
							<el-popover
								placement="top-start"
								width="150"
								trigger="hover"
								content="分享"
							>
								<i class="el-icon-share" slot="reference"></i>
							</el-popover>
						</li>
						<li class="fl">
							<el-dropdown>
								<span class="el-dropdown-link">
									<i class="el-icon-more"></i>
								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>1st mene item</el-dropdown-item>
									<el-dropdown-item>2nd menu item</el-dropdown-item>
									<el-dropdown-item>3d menu item</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</li>
						<div class="clear"></div>
					</ul>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import { get } from "@/utils/http";
	export default {
		data() {
			return {
				lists: [],
			};
		},
		mounted() {
			this.list();
		},
		methods: {
			// mock拿到表格数据
			list() {
				get("/application").then((res) => {
					this.lists = res.data.list;
				});
			},
		},
	};
</script>

<style lang="less" scoped>
	.avatar {
		width: 40%;
		padding-right: 10px;
	}
	.introduce {
		width: 60%;
		.name {
			overflow: hidden;
			color: rgba(0, 0, 0, 0.85);
			font-weight: 500;
			font-size: 16px;
			white-space: nowrap;
			text-overflow: ellipsis;
			max-width: 100%;
		}
		.account {
			width: 50%;
			p:first-child {
				margin-bottom: 4px;
				color: rgba(0, 0, 0, 0.45);
				font-size: 12px;
				line-height: 20px;
			}
			p:last-child {
				font-size: 24px;
				line-height: 32px;
				span {
					font-size: 14px;
					font-style: normal;
					margin-left: 2px;
				}
			}
		}
	}
	.options {
		border-top: 1px solid #f0f0f0;
	}
	.options li {
		width: 25%;
		margin: 12px 0;
		color: rgba(0, 0, 0, 0.45);
		text-align: center;
		border-right: 1px solid #f0f0f0;
	}
</style>
