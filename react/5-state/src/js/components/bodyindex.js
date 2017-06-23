import React from 'react';
export default class BodyIndex extends React.Component {
	constructor() {
		super(); /*调用基类所有的初始化方法*/
		this.state = {
			userName: 'zhangsan', 
			age: 20
		}
	}
	render() {
		setTimeout(() => {
			// 更改state内的某个参数
			this.setState({
				userName: 'wangwu'
			})
		}, 4000)

		return (
			<div>
				<h2>这里是页面主体</h2>
				<p>{this.state.userName}</p>
			</div>
		)
	}
}
