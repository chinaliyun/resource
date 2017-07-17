import React from 'react';
export default class BodyIndex extends React.Component{
	componentWillMount(){
		// 定义逻辑即可
		console.log('body will mount');
	}
	componentDidMount(){
		console.log('body did mount');
	}
	render(){
		var userName = 'zhangsan';
		var disableState = false;
		// 下面内容中包含了一个html代码，react会直接转移成字符串，如果需要以html的形式渲染，
		// 第一种方法是：把内容转成unicode格式，才能被正确转义
		// 第二种方法是使用dangerouslySetInnerHTML = {{__html: html}}的方式,这种情况可能会出现xss攻击，一定要小心
		var html = 'htmlcode<h3>h3</h3>';
		return (
			<div>
			<h2>这里是页面主体</h2>
			<p>{userName == '' ? '用户是没有登录': '用户名是：'+userName}</p>
			<p><input value="默认按钮"type="button" disabled={disableState} /></p>
			{/*{这里是注释}*/}
			<p>{html}</p>
			<p dangerouslySetInnerHTML={{__html:html}}></p>
			</div>
		)
	}
}
