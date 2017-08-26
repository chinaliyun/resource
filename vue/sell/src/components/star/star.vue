<template>
  <div class="star">
  	<span v-for="item in itemClasses" :class="item" class="star-item"></span>
  </div>
</template>

<script>
export default {
	props: {
		score: Number
	},
	computed: {
		itemClasses () {
			/* eslint no-unused-vars: 0 */
			let CLS_ON = 'on';
			let CLS_OFF = 'off';
			let CLS_HALF = 'half';
			let LENGTH = 5;
			let itemClasses = [];
			let tmpScore = Math.floor(this.score * 2) / 2;
			console.log(tmpScore)
			let integer = Math.floor(tmpScore);
			let hasDecimal = (tmpScore % 1) !== 0;
			for (let i = 0; i < integer; i++) {
				itemClasses.push(CLS_ON)
			}
			if (hasDecimal) {
				itemClasses.push(CLS_HALF)
			}
			while (itemClasses.length < LENGTH) {
				itemClasses.push(CLS_OFF)
			}
			return itemClasses;
		}
	}
}
</script>

<style lang="less" rel="stylesheet/less">
 	@import url('./star.less');
</style>
