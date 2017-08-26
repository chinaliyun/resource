gulp的检测事件组最长用的就是gulp.watch事件，可以传入三个参数，分别是glob字符串、基础任务以及callback

这里有一个坑，是关于glob设置的。

正常情况下，gulp.watch可以检测到文件的三个变动类型： added、changed、deleted，但是如果你的glob写错了，就检测不到added和deleted事件。

例子：

```
gulp.watch(__dirname+'/src/**/**', function(e){e})
```
这是我们最常用的glob，使用了node的全局变量__dirname配合glob字符串来设置范围，但是这种设置是检测不到added和deleted事件的，正确的设置如下；

```
gulp.watch('src/**/**', function(e){e})
```

需要注意的是：千万记住不要自作多情的在src前面多写一个`./`或者`/`,那样也是监测不到deleted以及added事件的