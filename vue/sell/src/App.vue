<template>
  <div id="appContainer">
	<v-header :seller="seller"></v-header>
	<div class="tabs">
		<div class="tab-item">
			<router-link active-class='active' exact to="/goods">商品</router-link>
		</div>
		<div class="tab-item">
			<router-link active-class='active' exact to="/ratings">评价</router-link>
		</div>
		<div class="tab-item">
			<router-link active-class='active' exact to="/">商家</router-link>
		</div>
	</div>
	<router-view></router-view>
  </div>
</template>

<script>
import header from 'components/header/header.vue'
export default {
	data () {
		return {
			seller: {}
		}
	},
	created () {
		this.$nextTick(function () {
			this.$http.get('/api/seller').then((res) => {
				res.json().then((res) => {
					if (res.errno === 0) {
						this.seller = res.data
					}
				})
			})
		})
	},
	components: {
		'v-header': header
	}
}
</script>

<style lang="less" rel="stylesheet/less">
#appContainer{
	font-size: 14px;
	.tabs{
		display: flex;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #999;
		border-top: 1px solid #999;
		box-sizing: border-box;
		.tab-item{
			flex-grow: 1;
			text-align: center;
			&>a{
				display:block;
				color: rgb(77, 85, 93);
				&.active{
					color: rgb(240, 20, 20);
				}
			}
		}
	}
}

</style>
