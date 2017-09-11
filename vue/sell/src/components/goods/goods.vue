<template>
	<div class="goods">
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<li v-for="(item, index) in goods" :key="index" class="menu-list-hook" :class="{'currentIndex': currentIndex===index}" @click="menuSelect(index, $event)">
					<v-support-icon v-show="item.type>0" :type="item.type"></v-support-icon>
					<span class="name">{{item.name}}</span>
				</li>
			</ul>
		</div>
		<div class="content-wrapper" ref="contentWrapper">
			<ul>
				<li v-for="(item, index) in goods" :key="index" class="food-list-hook">
					<h1>{{item.name}}</h1>
					<ul v-if="item.foods">
						<li v-for="(food, index) in item.foods" :key="index">
							<img class="avatar" :src="food.image" alt="">
							<div class="info">
								<p class="name">{{food.name}}</p>
								<p class="description">{{food.description}}</p>
								<p class="sellCount">
									<span>月售{{food.sellCount}}份&nbsp;&nbsp;</span>
									<span>好评率{{food.rating+'%'}}</span>
								</p>
								<p class="price">￥{{food.price}}</p>
								<div class="cartcontrol-wrapper">
									<v-cartcontrol :food="food" @cartAdd="cartAdd"></v-cartcontrol>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<v-shopcart ref="shopcart" :food-list="selectFoodList" :minPrice="seller.minPrice" :peisong="seller.deliveryPrice"></v-shopcart>
	</div>
</template>

<script>
import Goods from './goods.js'
export default Goods
</script>

<style lang="less" rel="stylesheet/less">
@import url('./goods.less');
</style>
