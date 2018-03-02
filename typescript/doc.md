> knockout.js 是一个响应式的MVVM库，用于将UI界面数据链接到数据模型当中，当数据模型改变的时候，自动改变UI中的值。

`ko.observable()`来初始化可以被跟踪到的属性值

```
    function person(){
        this.name = ko.observable('zhangsan')
        this.age = ko.observable(20);
    }
    ko.applybinding(new person())
```
使用`this.key()`格式来进行属性的重新赋值和获取，比如

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
    ko.applybinding(new person())
```

使用`ko.computed()`来设置一个计算属性
```
    function person(){
        this.name = ko.observable('zhangsan')
        this.age = ko.observable(20);
        this.getInfo = ko.computed(function(){
                return 'name is ' + this.name() + 'and age is ' + this.age()
        }, this)
    }
    ko.applybinding(new person())
```
这里要注意`ko.computed()`方法传递两个参数，第一个是计算返回值的函数，第二个是绑定的上下文对象，第二个参数缺少的时候，会报错且停止执行
