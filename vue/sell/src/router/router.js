import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Seller from 'components/seller/seller.vue'
import Goods from 'components/goods/goods.vue'
import Ratings from 'components/ratings/ratings.vue'
export default new VueRouter({
	routes: [{
		path: '',
		component: Goods
	}, {
		path: 'seller',
		component: Seller
	}, {
		path: '/goods',
		component: Goods
	}, {
		path: '/ratings',
		component: Ratings
	}]
})