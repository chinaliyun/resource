export default {
	props: {
		minPrice: {
			type: Number,
			default: 0
		},
		peisong: {
			type: Number,
			default: 0
		},
		foodList: {
			type: Array,
			default: function () {
				return []
			}
		}
	},
	data() {
		return {
			name: 'zhangsan',
			balls: [{
				show: false
			}, {
				show: false
			}, {
				show: false
			}, {
				show: false
			}, {
				show: false
			}, {
				show: false
			}, {
				show: false
			}, {
				show: false
			}, {
				show: false
			}],
			pos: {
				left: 0,
				bottom: 0
			}
		}
	},
	computed: {
		payCount() {
			var count = 0;
			this.foodList.map((item, index) => {
				count += (item.price * item.count)
			})
			return count;
		},
		foodCount() {
			var count = 0;
			this.foodList.map((item, index) => {
				count += item.count
			})
			return count;
		},
		payDesc() {
			if (this.payCount === 0) {
				return `￥${this.minPrice}元起送`
			}
			if (this.payCount > 0 && this.payCount < this.minPrice) {
				var diff = this.minPrice - this.payCount;
				return `还差￥${diff}元起送`
			}
			if (this.payCount >= this.minPrice) {
				var result = this.payCount + this.peisong;
				return `支付￥${result}元`
			}
		},
		enough() {
			if (this.payCount >= this.minPrice) {
				return true
			}
		}
	},
	methods: {
		drop(ele) {
			var pos = ele.getBoundingClientRect();
			this.pos = {
				left: pos.left,
				bottom: window.innerHeight - (pos.top + pos.height / 2)
			}
			for (let i = 0; i < this.balls.length; i++) {
				var item = this.balls[i];
				if (!item.show) {
					item.show = true
					return false;
				}
			}
			/*
				点击添加按钮：
				假设ball动画从上到下需要0.4s，每秒可点击10次；
				遍历balls，找到第一个状态为false的小球，设置为true；
				动画周期--显示：
					插入dom
					enter
					enter-active
				动画周期--隐藏：
					leave-active
					leave-to
					移除
				触发v-if动画：
				ball的动画初始位置：enter: 获取点击位置
				ball的动画结束位置：
				动画结束后，重置ball对应的状态为false；
				当在第一个ball动画未完成的时候，点击了第二次按钮，

				正常情况下JS动画：
				获取点击位置--设置ball为true，设置ball的left、top属性；
				添加包含终点位置left、top、transition的类名
				动态设置left、top、transition属性
				设置等于transition-duration的定时器--设置ball为false
			*/
		},
		ballBeforeEnter(el) {
			el.style.left = `${this.pos.left}px`;
			el.style.bottom = `${this.pos.bottom}px`;
		},
		ballEnter(el) {
			/* eslint-disable */
			var flag = el.offsetHeight;
			el.style.left = '45px';
			el.style.bottom = '35px';
		},
		ballAfterEnter(el) {
			var childs = el.parentNode.childNodes;
			for (let i = 0; i < childs.length; i++){
				if (childs[i] == el){
					this.balls[i].show = false;
				}
			}
		}
	}
}
