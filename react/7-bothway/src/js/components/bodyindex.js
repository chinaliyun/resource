import React from 'react';
import BodyChild from './bodyChild';
export default class BodyIndex extends React.Component {
	constructor(){
		super();
		this.state = {
			age: 30,
			name: 'zhangsan'
		}
	}
	changeUserInfo(age,name){
		this.setState({
			age: age ? age: 40,
			name: name ? name: 'lisi'
		})
	}
	handleChildValueChange(e){
		this.setState({
			age: e.target.value
		})
	}
	render() {
		return (
			<div>
				<h2>这里是页面主体</h2>
				<p>age: {this.state.age}</p>
				<p>age: {this.state.name}</p>
				{/*注意调用方法的格式，后面必须加上bind(this)，否则会报错*/}
				<input type='button' value='提交' onClick={this.changeUserInfo.bind(this,50,'wangwu')} />
				<input type='button' value='提交' onClick={this.changeUserInfo.bind(this)} />
				{/*注意，这里在调用方法的时候，不能使用fn.bind()()的方式传递参数*/}
				<BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)} />
			</div>
		)
	}
}

