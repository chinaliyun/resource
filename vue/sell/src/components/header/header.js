import Star from 'components/star/star.vue'
import SupportIcon from 'components/support-icon/support-icon.vue';
export default {
	props: {
		seller: Object
	},
	data () {
		return {
			detailShow: false,
			score: 2.8
		}
	},
	created () {
	},
	methods: {
		showDetail () {
			this.detailShow = true
		},
		hideDetail () {
			this.detailShow = false
		}
	},
	watch: {
	},
	components: {
		'v-star': Star,
		'v-support-icon': SupportIcon
	}
}
