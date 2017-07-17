import React from 'react';
import PropTypes from 'prop-types';
import BodyChild from './bodyChild'
export default class BodyIndex extends React.Component {
	render() {
		setTimeout(() => {
			// 更改state内的某个参数
			this.setState({
				userName: 'wangwu'
			})
		}, 4000)
			console.log(this.props.userId)

		return (
			<div>
				<h2>这里是页面主体</h2>
				<p>{this.props.userName}</p>
				<p>{this.props.userId}</p>
				<BodyChild {...this.props} />
			</div>
		)
	}
}
// react1.15版本开始propTypes需要手动引入prop-types插件
BodyIndex.propTypes = {
	userId: PropTypes.string
}
// 如果不知道父组件有有没有设置制定的prop属性，可以自定义一个默认的值，如果父组件已经被指定了，那么就会覆盖默认值
BodyIndex.defaultProps = {
	userName: 'lisi'
}
