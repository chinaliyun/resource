<template>
  <div class="goods" >
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<li v-for="(item, index) in goods" :class="{'currentIndex': currentIndex===index}">
					<v-support-icon v-show="item.type>0" :type="item.type"></v-support-icon>
					<span class="name">{{item.name}}</span>
				</li>
			</ul>
		</div>
		<div class="content-wrapper" ref="contentWrapper">
      <ul>
        <li v-for="item in goods" class="food-list-hook">
            <h1>{{item.name}}</h1>
            <ul>
              <li v-if="item.foods" v-for="food in item.foods">
                <img class="avatar" :src="food.image" alt="">
                <div class="info">
                  <p class="name">{{food.name}}</p>
                  <p class="description">{{food.description}}</p>
                  <p class="sellCount">
                    <span>月售{{food.sellCount}}份&nbsp;&nbsp;</span>
                    <span>好评率{{food.rating+'%'}}</span>
                  </p>
                  <p class="price">￥{{food.price}}</p>
                </div>
              </li>
            </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Goods from './goods.js'
export default Goods
</script>

<style lang="less" rel="stylesheet/less">
@import url('./goods.less');
</style>
