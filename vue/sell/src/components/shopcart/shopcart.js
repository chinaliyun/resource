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
	data () {
		return {
			name: 'zhangsan'
		}
	},
	computed: {
		payCount () {
			var count = 0;
			this.foodList.map((item, index) => {
				count += (item.price * item.count)
			})
			return count;
		},
		payDesc () {
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
		enough () {
			if (this.payCount >= this.minPrice) {
				return true
			}
		}
	}
}
