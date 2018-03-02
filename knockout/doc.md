> knockout.js 是一个响应式的MVVM库，用于将UI界面数据链接到数据模型当中，当数据模型改变的时候，自动改变UI中的值。

`ko.observable()`来初始化可以被跟踪到的属性值
-
如果需要某个属性能够被跟踪，且自动改变UI，必须使用`ko.observable()`来设置该属性值
```
    function person(){
        this.name = ko.observable('zhangsan')
        this.age = ko.observable(20);
    }
    ko.applyBindings(new person())
```

使用`this.key()`格式来进行属性的重新赋值和获取
-

```js
    function person(){
        this.name = ko.observable('zhangsan')
        this.age = ko.observable(20);
        this.getName = function(){
            return this.name()
        }
        this.upperName = function(){
            this.name(this.name().toUpperCase())
        }
    }
    ko.applyBindings(new person())
```

使用`ko.computed()`来设置一个计算属性
-
```js
    function person(){
        this.name = ko.observable('zhangsan')
        this.age = ko.observable(20);
        this.getInfo = ko.computed(function(){
                return 'name is ' + this.name() + 'and age is ' + this.age()
        }, this)
    }
    ko.applyBindings(new person())
```
这里要注意`ko.computed()`方法传递两个参数，第一个是计算返回值的函数，如果存在参数，则是指定绑定的上下文对象，上面案例中因为要绑定本身所在的上下文环境，所以需要传递`this`进去,在foreach中需要自动使用当前的上下文对象，所以不需要传第二个参数，这个会在后面讲到

设置可被跟踪的数组属性
-
当需要设置一个可被跟踪的数组属性时，需要使用`ko.observableArray()`方法
```js
    function person(){
        this.list = ko.observableArray([
                {},{},{}
            ])
    }
```
注意： 修改该属性的时候，直接使用`this.list`即可，不需要使用`this.list()`
```js
    function person(){
        var _this = this;
        this.list = ko.observableArray([
                {},{},{}
            ])
        this.add  = function(){
            _this.list.push();
            _this.list.splice(0,1);
        }
    }
```