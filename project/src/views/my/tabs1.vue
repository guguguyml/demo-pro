<template>
	<div id="article">
		<div v-for="(item, index) in article" :key="index">
			<h4>
				{{ item.name }}
			</h4>
			<el-tag
				:key="indexs"
				v-for="(items, indexs) in item.tags"
				color="#FBFBFB"
				class="tags mt"
				size="mini"
			>
				{{ items }}
			</el-tag>
			<p class="mt">
				{{ item.paragraph }}
			</p>
			<p class="mt">
				<span>{{ item.comment }}</span
				>发布在<span>{{ item.web }}</span>
				<span>2021-01-05 15:49</span>
			</p>
			<ul class="clearfix mt">
				<li class="fl">
					<span style="color:#1890ff;margin-right:5px"
						><i class="el-icon-star-off"></i></span
					>136
				</li>
				<li class="fl">
					<span style="margin-right:5px"><i class="el-icon-star-off"></i></span
					>140
				</li>
				<li class="fl">
					<span style="margin-right:5px"
						><i class="el-icon-chat-dot-round"></i></span
					>128
				</li>
			</ul>
			<el-divider class="divider"></el-divider>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				article: [
					{
						name: "Alipay",
						tags: ["Ant Design", "设计语言", "蚂蚁金服"],
						paragraph:
							"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
						comment: "付小小",
						web: "https://ant.design",
					},
					{
						name: "Angular",
						tags: ["Ant Design", "设计语言", "蚂蚁金服"],
						paragraph:
							"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
						comment: "曲丽丽",
						web: "https://ant.design",
					},
					{
						name: "Ant Design",
						tags: ["Ant Design", "设计语言", "蚂蚁金服"],
						paragraph:
							"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
						comment: "林东东",
						web: "https://ant.design",
					},
					{
						name: "Ant Design Pro",
						tags: ["Ant Design", "设计语言", "蚂蚁金服"],
						paragraph:
							"段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。",
						comment: "周星星",
						web: "https://ant.design",
					},
				],
			};
		},
	};
</script>

<style lang="less" scoped>
	.tags {
		margin-right: 5px;
		color: #252525;
		border-color: #d9d9d9;
	}
	p {
		max-width: 720px;
		line-height: 22px;
		color: rgba(0, 0, 0, 0.85);
		font-size: 14px;
		span {
			color: #1890ff;
			margin: 0 10px;
		}
		span:last-child {
			margin-left: 16px;
			color: rgba(0, 0, 0, 0.25);
			font-style: normal;
		}
	}
	ul li {
		border-right: solid 1px #f0f0f0;
		padding: 0 16px;
		color: rgba(0, 0, 0, 0.45);
		font-size: 14px;
		line-height: 1.5715;
		text-align: center;
	}
	ul li:last-child {
		border-style: none;
	}
</style>
