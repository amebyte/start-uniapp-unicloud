<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<button open-type="getUserInfo" @getuserinfo="login">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			login() {
				// uni.showModal({
				// 	title: '温馨提示',
				// 	content: '亲，授权微信登录后才能正常使用小程序功能',
				// 	success(res) {
				// 		if (res.confirm) {

				// 		}
				// 	}
				// })

							uni.login({
								provider: 'weixin',
								success: function(loginRes) {
									console.log('loginRes.authResult',loginRes);
								}
							});
							uni.getUserProfile({
								desc: "注册用户信息使用",
								lang: "zh_CN",
								success:(res) => {
									console.log('res', res)
								}
							})
				
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
