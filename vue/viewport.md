layout viewport 
-
浏览器为了能正常显示不是专门为移动端设计的页面而自定的一个宽度，大部分为980px
可以通过document.documentElement.clientWidth获取

visual viewport
-
浏览器可视区域大小，在移动端中通常都等于是设备`屏幕宽度`，这个值是没有单位的

在移动端中**通常**等于设备`屏幕宽度`， 也就是说这个值是可变的，具体的计算方式是`visual viewport = ideal viewpor / initial-scale`  ,即 可视区域宽度=理想宽度/缩放值。

比如当屏幕宽度为320px，缩放值为2的时候，屏幕可视宽度实际上是160，因为view缩放了2倍嘛。 也就是说本来需要2px才能占满屏幕的宽度， 现在只需要1px就可以占满了


ideal viewport 
-
当专门为移动端设置页面的时候，我们需要在所有的移动端中显示的显示相同比例的内容，比如一段14px大小的文字，不会因为在一个高密度像素的设备中显示的太小而看不清， 理想的状态是任何`屏幕密度`，任何`分辨率`下显示出来的大小都是差不多的。 
通常情况下，这个值会等于设备的`屏幕宽度`

浏览器默认的viewport宽度是layout viewport， 通常使用`<meta name="viewport">`来重新设置viewport的宽度	

如果想把viewport的宽度设置为ideal viewport的宽度， 只需要把宽度设置为`屏幕宽度`就好了， 也就是`<meta name="viewport" content="width=device-width">`

但是此时在ipad和iPhone中，无论是横屏还是竖屏，viewport的宽度始终等于竖屏状态下的`屏幕宽度`

为什么`<meta name="viewport" content="initial-scale=1">`能达到和`<meta name="viewport" content="width=device-width">`一致的效果呢，那是因为浏览器缩放的就是相对于ideal viewport来缩放的。 
但是此时就轮到在window phone中的IE浏览器无论是横屏还是竖屏，viewport的宽度始终等于竖屏状态下的`屏幕宽度`了

那么如果width和initial-scale同时出现了怎么办？ 浏览器会计算后，取两者中的最大值来作为默认的viewport宽度，因此最完美的写法是两者都写上去

initial-scale
-
安卓自带的webpack浏览器是不会自动计算initial-scale的，而IE根本不甩这个属性，无论给他设置什么，他的initial-scale都是1

iphone和ipad中，无论给viewport设置的宽是多少，只要没有指定初始缩放值，浏览器会自动计算initial-scale属性，然后把vieport的宽度设为屏幕宽度，以达到没有滚动条得的目的








