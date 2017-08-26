<template>
  <div class="header">
		<div class="top-wrapper">
			<div class="avatar">
				<img width="64" height="64" :src="seller.avatar" alt="">
			</div>
			<div class="info">
				<div class="name">
					<span class="level">品牌</span>
					<span class="value">{{seller.name}}</span>
				</div>
				<div class="description">{{seller.description}}</div>
				<div class="supports" v-if="seller.supports">
					<span class="icon"></span>
					<span class="value">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div v-if="seller.supports" class="supportMore" @click="showDetail()">
				<span>{{seller.supports.length}}个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin" @click="showDetail()">
			<span class="label">公告</span>
			<span class="value">{{seller.bulletin}}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<transition name="fade">
		<div v-if="detailShow" class="detail"  @click="hideDetail()">
			<div class="detail-wrapper">
				<div class="name">{{seller.name}}</div>
				<v-star :score="score"></v-star>
				<div class="title">
					<span class="line"></span>
					<span class="value">优惠信息</span>
					<span class="line"></span>
				</div>
				<div class="detail-supports">
					<div v-for="item in seller.supports">
						<v-support-icon :type="item.type"></v-support-icon>
						<span>{{item.description}}</span>
					</div>
				</div>
				<div class="title">
					<span class="line"></span>
					<span class="value">商家公告</span>
					<span class="line"></span>
				</div>
				<div class="detail-bulletin">
					{{seller.bulletin}}
				</div>
			</div>
			<div class="detail-close">
				<i class="icon-close" @click="hideDetail()"></i>
			</div>
		</div>
		</transition>
  </div>
</template>

<script>
import Header from './header.js'
export default Header
</script>

<style lang="less" rel="stylesheet/less">
 	@import url('./header.less');
</style>
