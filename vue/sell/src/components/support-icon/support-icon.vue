<template>
	<span class="support-icon" :class="'support-icon'+type"></span>
</template>

<script>
export default {
	props: {
		type: Number
	}
}
</script>

<style lang="less" rel="stylesheet/less">
@import url('../../common/styles/mixin.less');
	.support-icon {
		display: inline-block;
		width: 20px;
		height: 20px;
		background-position: center;
		background-size: cover;
		background-color: white;
	}
	.support-icon0 {
		.bg-image('components/support-icon/decrease_2@3x.png')
	}
	.support-icon1 {
		.bg-image('components/support-icon/discount_2@3x.png')
	}
	.support-icon2 {
		.bg-image('components/support-icon/special_2@3x.png')
	}
	.support-icon3 {
		.bg-image('components/support-icon/invoice_2@3x.png')
	}
	.support-icon4 {
		.bg-image('components/support-icon/guarantee_2@3x.png')
	}
</style>
