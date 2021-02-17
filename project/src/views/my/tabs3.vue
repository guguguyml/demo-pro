<template>
	<div>
		<el-row :gutter="16">
			<el-col :span="6" v-for="(item, index) in lists" :key="index">
				<el-card shadow="hover" :body-style="{ padding: '0px' }" class="mt">
					<div>
						<img
							src="https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png"
						/>
					</div>
					<div class="introduce mt">
						<p style="margin-bottom: 4px;">{{ item.name }}</p>
						<div class="cont">
							<p>{{ item.introduce }}</p>
						</div>
						<div class="time">
							<span>{{ item.time }}</span>
							<span style="margin-left:10px">
								<el-avatar
									src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
									:size="22"
								>
								</el-avatar>
							</span>
							<span>
								<el-avatar
									src="https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png"
									:size="22"
								>
								</el-avatar>
							</span>
							<span>
								<el-avatar
									src="https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png"
									:size="22"
								>
								</el-avatar>
							</span>
						</div>
					</div>
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
			list() {
				get("/project").then((res) => {
					this.lists = res.data.list;
				});
			},
		},
	};
</script>

<style lang="less" scoped>
	.introduce {
		margin: 20px;
		.cont {
			font-size: 14px;
			color: rgba(0, 0, 0, 0.45);
			height: 40px;
			overflow: hidden;
			margin-bottom: 10px;
		}
		.time {
			font-size: 14px;
			color: rgba(0, 0, 0, 0.45);
		}
	}
</style>
