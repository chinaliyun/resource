// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/router'
import VueResource from 'vue-resource'
import App from './App'

// alert(document.documentElement.clientWidth)
// alert(window.innerWidth)
Vue.use(VueResource);

Vue.config.productionTip = false

let Root = Vue.extend(App);

new Root({
	router
}).$mount('#app')

