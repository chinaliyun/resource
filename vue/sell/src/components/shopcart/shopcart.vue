<template>
	<div class="shopcart">
		<transition-group @before-enter="ballBeforeEnter" @enter="ballEnter" @after-enter="ballAfterEnter" tag="div" name="ball">
			<div class="ball" v-for="(item, index) in balls" :key="index" v-if="item.show"></div>
		</transition-group>
		<div class="left-wrapper">
			<div class="cart">
				<i class="icon-shopping_cart" :class="{'enough': enough}"></i>
				<!-- <span class="total" :class="{'active': foodList.length>0}">{{foodCount}}</span> -->
			</div>
			<div class="count">￥{{payCount}}</div>
			<div class="other">另需配送费￥{{peisong}}元</div>
		</div>
		<div class="right-wrapper" :class="{'enough': enough}">
			<span>{{payDesc}}</span>
		</div>
	</div>
</template>
<script type="text/javascript">
import Shopcart from './shopcart.js'
export default Shopcart
</script>
<style rel="stylesheet/less" lang=less>
@import "./shopcart.less";
</style>
