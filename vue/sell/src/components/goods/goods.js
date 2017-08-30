import SupportIcon from 'components/support-icon/support-icon.vue'
import BScroll from 'better-scroll'
import Shopcart from 'components/shopcart/Shopcart.vue'
import Cartcontrol from 'components/cartcontrol/cartcontrol.vue'

export default {
	data () {
		return {
			goods: [],
			listHeight: [],
			scrollY: 0,
			seller: {}
		}
	},
	created () {
		this.$nextTick(function () {
			this.$http.get('/api/goods').then((res) => {
				res.json().then((res) => {
					if (res.errno === 0) {
						this.goods = res.data
						this.$nextTick(() => {
							this._initScroll()
							this._calculateHeight()
						})
					}
				})
			})
			this.$http.get('api/seller').then(res => {
				res.json().then(res => {
					if (res.errno === 0) {
						this.seller = res.data
					}
				})
			})
		})
	},
	methods: {
		test () {
			console.log('add')
		},
		_initScroll () {
			/* eslint no-unused-vars: 0 */
			this.menuScroll = new BScroll(this.$refs.menuWrapper, {
				click: true
			})
			this.contentScroll = new BScroll(this.$refs.contentWrapper, {
				probeType: 3,
				click: true
			})
			this.contentScroll.on('scroll', (pos) => {
				this.scrollY = Math.abs(Math.floor(pos.y))
			})
		},
		_calculateHeight () {
			let height = 0;
			let foodList = this.$refs.contentWrapper.querySelectorAll('.food-list-hook');
			this.listHeight.push(height)
			for (let i = 0; i < foodList.length; i++) {
				height += parseInt(window.getComputedStyle(foodList[i]).height.slice(0, -2));
				this.listHeight.push(height)
			}
		},
		menuSelect (index, event) {
			let foodList = this.$refs.contentWrapper.querySelectorAll('.food-list-hook');
			let ele = foodList[index];
			this.contentScroll.scrollToElement(ele, 500)
		}
	},
	watch: {
		currentIndex: function (newValue, old) {
			let ele = this.$refs.menuWrapper.querySelectorAll('.menu-list-hook')[newValue];
			this.menuScroll.scrollToElement(ele, 300);
		}
	},
	computed: {
		currentIndex () {
			for (let i = 0; i < (this.listHeight.length - 1); i++) {
				var height1 = this.listHeight[i];
				var height2 = this.listHeight[i + 1];
				// console.log(this.scrollY, height1, height2)
				if (this.scrollY >= height1 && this.scrollY < height2) {
					return i;
				}
			}
			return 0;
		},
		selectFoodList () {
			var foods = [];
			this.goods.map(item => {
				item.foods.map(food => {
					if (food.count) {
						foods.push(food)
					}
				})
			})
			return foods;
		}
	},
	components: {
		'v-support-icon': SupportIcon,
		'v-shopcart': Shopcart,
		'v-cartcontrol': Cartcontrol
	}
}
