线上生产环境的标准：
-
- 架构设计
- 组件抽象
- 模块拆分
- 代码风格统一
- JS变量命名规范

.babel插件
-
babel编译中经常需要设置一个presets的属性，是因为ES6 里面有一些语法浏览器是不支持的，需要使用一些polify。比如：
```
presets: ['es2015', 'stage-2']
```
如果查看es2015的话，会发现里面有很多包括箭头函数的polify方法， 那么stage是干嘛的呢？ 这个是ECMA草案的一个写法， ECMA草案分为0~3总共4个部分，stage-2表示2~3的草案，stage-1表示1-3的草案 ， 数字越小，表示支持的范围越大，stage-0基本上就是表示支持所有ECMA草案中心的语法和API了

.eslintignore
-
忽略对指定的文件进行eslint检查

.eslintsrc
-
配置自定义的eslint规则

webpack-config文件中的resolve.extensions
-
自动补全引入的文件后缀，比如我们经常在文件中是使用`var app = require('app')`,  如果我们的resolve.extensions设置为`['','.js','.vue']`，那么node会按照我们的设置去找`app app.js  app.vue`等文件是否存在，如果存在，就会引入这个文件

webpack-config文件中的resolve.fallback
-
当我们通过require引入的文件，在我们自定义的模块中找不到的时候，允许node在resolve.fallback中定义的文件夹中去搜寻文件，这个值也是一个数组形式的，比如通常我们会把node_modules放进来： `['path.join(__dirname, '../node_modules')]`。这个功能其实与webpack-config文件中resolveLoader的作用是一样的

webpack-config文件中的resolve.alias
-
这个东西很有用，可以避免我们在require的时候，使用过长的文件路径，比如
```
alias: {
	"src": path.resolve(__dirname, "../src"),
	"assets": path.resolve(__dirname, "../src/assets")
}
````
当我们使用`require('assets/app.js')`的时候，webpack会自动去`../src/assets/`中寻找app.js文件


webpack-config文件中的module.preLoaders和module.loaders
-
preLoaders和loaders作用其实是相同的，都是找到指定的文件，处理后再编译出来，只不过preLoader会在loader之前运行、、

- loader.include 指定允许编译的文件
- loader.exclude 指定不需要编译的文件
- loader.query  对使用的loader配置参数

express添加路由
-
```
var express = require('express');

var apiRouters = express.Router();
apiRouters.get('/selles', function(req, res){
	res.send("")
})
```

为express路由统一添加前缀
-
```
var app = express();
app.use('/api', apiRouters)
```
现在如果想访问上面例子中的selles，就需要使用`/api/selles`了， 不要忘记每个路由前面要加上斜杠

Multiple spaces found before ''./components/header/header.vue''
-
在后面的字符串前面多写了一个空格

Unexpected tab character
-
eslint默认不允许使用tab，建议使用空格代替，相关的配置是no-tab；

Newline required at end of file but not found 
-
文件最后一行没有换行，可以通过`"eol-last":0`解决

Strings must use singlequote
-
字符串两头必须用单引号， 不能用双引号

[Vue warn]: Do not use built-in or reserved HTML elements as component id: header
-
因为header是html的保留元素名，因此在创建vue组件的时候，不建议使用这个名称，为了代码的规范，所有组件前都加上`v-`前缀

vue-router
-
ES6中使用vue-router的方法如下
```
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Index = {template: '<div>index</div>'}
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

let router = new VueRouter({
    routes: [
        { path: '/', component: Index },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ]
})
new Vue({
    router
}).$mount('#app')
```
这样下来导航之类的东西，都要放在index.html文件中，如果想在首页中直接用另一个组件，可以使用extend方法
```
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
Vue.config.productionTip = false

let Root = Vue.extend(App);

const Index = {template: '<div>index</div>'}
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

let router = new VueRouter({
    routes: [
        { path: '/', component: Index },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ]
})
new Root({
    router
}).$mount('#app')
```

默认路由
-
正常来说页面第一次打开是没有路由参数的，可以通过两种方式设置默认路由
1. 可以在main.js中直接使用router.push('/foo')的形式，直接跳转到指定路由
2. 在路由表中设置一个path为空字符串的路由
```
// router.js
import Vue from 'vue'
import VueRouter form 'vue-router'
import Index from 'index'
export default new VueRouter({
    routes: [
        {
            path: "",  // 这是第二种方法的形式
            component: Index
        },
        {
            path: "/index",  // 这是第一种方法的形式，要配合下面main.js中的push方法
            component: Index
        }
    ]
})
// main.js
import router form 'router.js'

router.push('/index')
```
当使用第二种方式的时候，可以通过下面方式跳转到默认页面/首页
```
import router from 'router.js'

router.push('/')
```

设置被激活的路由class
-
router-link 上添加active-class即可， 但是要注意路由中有一个exact属性默认是false， 也就是非严格匹配。也就是说路由"/"， 会匹配所有以"/"开头的路由，此时可以在router-link上添加一个exact属性即可

vue-resource
-
vue-resource插件尽量在入口文件中import且use进来

给子组件传递数据
-
vue通过在组件上使用v-bind来给子组件传递数据，子组件同时也要设置对应的props属性来接数据, v-bind可以缩写为`:`, 比如
```
<div v-bind:name="name" ><div>
<div :name="name" ><div>

data: {
    name: 'zhangsan'
}
```

使用less来写样式
-
使用less来写样式的时候，需要安装`vue-style-loader vue-less-loader`等编译器，不要忘记前面有一个`vue`前缀, 另外vue文件中的style标签不要忘记加上lang和rel属性，less对应的是`lang="less" rel="stylesheet/less`，这样才能被vue-style-loader识别出来


v-if
-
假设一个子组件接收父组件传递进来的一个数据类型如下：
```
seller: 
{
    id: "101",
    supports: [
        {name: "zhangsan"},
        {name: "lisi"}
    ]
}

// .vue
<div>{{seller.supports.length}}</div>
<div>{{seller.supports[0].name}}</div>
```
在使用props传递数据的时候，如果要拿到第二层以上的数据，必须要先判断上一层数据是否存在


transform: rotate()
-
在针对一个`i`标签使用`transform: rotate()`样式没有效果，是因为i标签是一个内联元素，给元素加一个`display:blcok`样式即可

派发自定义事件`$emit`
-
这个事件主要用于在**组件内部**触发事件，并不能跨组件触发，在组件内部的用法如下：
```
created () {
    this.$on('add', (data) => {
        console.log(data.name) // 'zhangsan'
    })
},
methods: {
    add () {
        this.$emit('add', {name: 'zhangsan}, 其他参数)
    }
}
```
如果需要通过自定义事件触发父组件中的事件，需要在组件中使用`v-on`绑定事件名，用法如下：
```

// 父组件 vue
<custom-component @click="add"></div>

// 父组件 js
methods: {
    add (data) {
        console.log(data.name) // 'zhangsan'
    }
}

// 子组件 js
methods: {
    add () {
        this.$emit('add', {name: 'zhangsan'})  // 派发事件
    }
}
```
注意，当绑定从子组件接收的事件时，v-on的值，只需要写绑定的方法名即可，不需要带括号:
```
// 错误：
<div @add="add()"></div>
<div @add="add(data)"></div>

// 正确
<div @add="add"></div>
```

父组件执行子组件中定义的方法
-
父组件中可以通过this.refs.refName访问到子组件，并且访问到子组件中的方法，案例如下： 
```
<div id="app>
    <button @click="click()"></button>
</div>
// 父组件
new Vue({
    el: '#app',
    methods: {
        click () {
            this.refs.childEl.add()
        }
    }
})
Vue.component('test-comp', {
    template: '<p></p>',
    methods: {
        add() {
            console.log('add')
        }
    }
})


```

使用JS设置自定义动画
-
vue2.0开始transition的钩子函数，可以直接在transition元素中以v-on的方式绑定，以进入的动画为例：
从before-enter到enter到after-enter三个步骤，在某些时候，before前面还会添加一个appear周期，暂时先不说apper周期；

before-enter指的是元素即将显示之前，可以用来设置元素的初始样式，与定义类名v-enter的效果相同

enter值得是元素开始显示的时候，可以 用来设置元素最终将要显示的样式，与定义类名v-enter-to的效果相同

after-enter值得是元素显示动画结束的时候，可以用来设置动画结束后元素的样式，

值得注意的是：before-enter事件与enter事件之间的时间间隔是如此之短，眨眼间就从before-enter的样式换成了enter的样式，这是为什么呢？在现在的浏览器中，大家都不约而同的做了一件事情，那就是重绘队列；当浏览器在很短的时间内DOM的位置大小改变了很多次，浏览器不会每一次去重绘页面，而是会把他们放到一个队列中，计算出最终的样式，再一次性完成DOM重绘；

所以当使用JS自定义动画的时候，在enter函数中，我们需要强制浏览器进行一次重绘，强制浏览器进行重绘的方法有很多，最常见的就是获取元素的offset属性。由于计算这个属性，必须确保元素没有未完成的动作，所以或者这些属性的时候，就会引起浏览器强制重绘一次，也就解决了完全没看到before-enter中指定样式的问题








