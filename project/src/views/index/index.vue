<template>
	<div>
		<!-- 数据卡片 -->
		<div>
			<el-row :gutter="16">
				<el-col :span="6">
					<el-card class=" in">
						<div class="fl">
							<p>本月进件</p>
							<p style="font-weight:boid">6588</p>
							<p>
								20.12%
								<span style="font-size:12px">与上月同比</span>
							</p>
						</div>
						<i class="el-icon-tickets ico fr"></i>
						<div class="clear"></div>
					</el-card>
				</el-col>
				<el-col :span="6">
					<el-card class=" in">
						<div class="fl">
							<p>本月放款(元)</p>
							<p style="font-weight:boid">121000000</p>
							<p>
								+1.25%
								<span style="font-size:12px">与上月同比</span>
							</p>
						</div>
						<i class="el-icon-money ico fr"></i>
						<div class="clear"></div>
					</el-card>
				</el-col>
				<el-col :span="6">
					<el-card class=" allout">
						<div class="fl">
							<p>累计进件</p>
							<p style="font-weight:boid">128700</p>
							<p>
								+11.48%
								<span style="font-size:12px">与去年同比</span>
							</p>
						</div>
						<i class="el-icon-date ico fr"></i>
						<div class="clear"></div>
					</el-card>
				</el-col>
				<el-col :span="6">
					<el-card class=" allout">
						<div class="fl">
							<p>累计放款</p>
							<p style="font-weight:boid">923380079</p>
							<p>
								-2.06%
								<span style="font-size:12px">与去年同比</span>
							</p>
						</div>
						<i class="el-icon-coin ico fr"></i>
						<div class="clear"></div>
					</el-card>
				</el-col>
			</el-row>
		</div>
		<!-- 进件统计分析 -->
		<div class="mt">
			<el-row :gutter="16">
				<el-col :span="18">
					<el-card>
						<div slot="header" style="text-align:center;line-height:50px">
							<span>进件统计分析</span>
						</div>
						<div style="height:240px" ref="analysis"></div>
					</el-card>
				</el-col>
				<el-col :span="6">
					<el-card>
						<div slot="header" style="text-align:center;line-height:50px">
							<span>进件统计分析</span>
						</div>
						<div style="height:240px" ref="percent"></div>
					</el-card>
				</el-col>
			</el-row>
		</div>
		<!-- 时间线与日历 -->
		<div class="mt">
			<el-row :gutter="20" class="time">
				<el-col :span="12">
					<el-card body-style="height:700px">
						<el-timeline style="text-align:left">
							<el-timeline-item timestamp="2018/4/12" placement="top">
								<el-card>
									<h4>更新 Github 模板</h4>
									<p>王小虎 提交于 2018/4/12 20:46</p>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2018/4/3" placement="top">
								<el-card>
									<h4>更新 Github 模板</h4>
									<p>王小虎 提交于 2018/4/3 20:46</p>
								</el-card>
							</el-timeline-item>
							<el-timeline-item timestamp="2018/4/2" placement="top">
								<el-card>
									<h4>更新 Github 模板</h4>
									<p>王小虎 提交于 2018/4/2 20:46</p>
								</el-card>
							</el-timeline-item>
						</el-timeline>
					</el-card>
				</el-col>
				<el-col :span="12">
					<el-card body-style="height:700px">
						<el-calendar v-model="value1"> </el-calendar>
					</el-card>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value1: new Date(),
			};
		},
		mounted() {
			this.drawLine();
			this.drawPie();
		},
		methods: {
			drawLine() {
				var myChart = this.$echarts.init(this.$refs["analysis"]);
				var option = {
					xAxis: {
						data: [
							"20-01",
							"20-02",
							"20-03",
							"20-04",
							"20-05",
							"20-06",
							"20-07",
						],
						boundaryGap: false,
					},
					yAxis: { type: "value" },
					series: [
						{
							name: "销量",
							type: "line",
							data: [30, 84, 56, 47, 84, 61, 90],
							smooth: true,
							areaStyle: {
								color: {
									type: "linear",
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [
										{
											offset: 0,
											color: "#4f88ff", // 0% 处的颜色
										},
										{
											offset: 1,
											color: "white", // 100% 处的颜色
										},
									],
									global: false, // 缺省为 false
								},
							},
							lineStyle: {
								color: "#4f88ff",
							},
						},
					],
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			drawPie() {
				let myChart = this.$echarts.init(this.$refs["percent"]);
				let option = {
					tooltip: {
						trigger: "item",
						formatter: "{a} <br/>{b}: {c} ({d}%)",
					},
					series: [
						{
							name: "访问来源",
							type: "pie",
							radius: ["50%", "70%"],
							avoidLabelOverlap: false,
							label: {
								show: false,
								position: "center",
							},
							emphasis: {
								label: {
									show: true,
									fontSize: "30",
									fontWeight: "bold",
								},
							},
							labelLine: {
								show: false,
							},
							data: [
								{ value: 335, name: "房闪贷" },
								{ value: 310, name: "新车贷" },
								{ value: 234, name: "资金贷" },
								{ value: 135, name: "合力贷" },
								{ value: 1548, name: "其他" },
							],
						},
					],
				};
				myChart.setOption(option);
			},
		},
	};
</script>

<style lang="less" scoped>
	.ico {
		font-size: 90px;
		color: rgba(255, 255, 255, 0.3);
	}
	.in {
		background-color: #4f88ff;
	}
	p {
		line-height: 30px;
		color: #fff;
	}
	.allin {
		background-color: #5050ff;
	}
	.allout {
		background-color: #f49b3b;
	}
	.out {
		background-color: #f26075;
	}
	.time p {
		color: #666666;
	}
</style>
