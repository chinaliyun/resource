<template>
  <div class="cartcontrol">
		<transition name="fade">
	  <div class="cart-descease" v-show="food.count>0" @click="removeCount()">
				<i class="icon-remove_circle_outline"></i>
		</div>
		</transition>
	  <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
	  <div class="cart-add icon-add_circle" @click="addCart($event)"></div>
  </div>
</template>
<script>
import Vue from 'vue';

export default {
	props: {
		food: {
			type: Object,
			default: function () {
				return {}
			}
		}
	},
	methods: {
		addCart (event) {
			if (!this.food.count) {
				Vue.set(this.food, 'count', 1)
			} else {
				this.food.count++
			}
			this.$emit('cartAdd', event.target)
		},
		removeCount () {
			if (this.food.count > 0) {
				this.food.count--
			}
		}
	}
}
</script>
<style lang="less">
	.cartcontrol{
		display: flex;
		align-items: center;
		font-size: 22px;
		.cart-descease,.cart-add{
			height: 22px;
			padding: 0 6px;
			color: #1aa1da;
		}
		.cart-descease{
			transition: all 0.2s linear;
			i{
				transition: all 0.2s linear;
				display: block;
			}
			&.fade-enter-active,&.fade-leave-active{
				opacity: 1;
				transform: translateX(0);
				i{
					transform: rotate(0deg);
				}
			}
			&.fade-enter,&.fade-leave-to{
				opacity: 0;
				transform: translateX(20px);
				i{
					transform: rotate(180deg);
				}
			}
		}
		.cart-count{
			font-size: 16px;
			min-width: 16px;
			text-align: center;
		}
	}
</style>


