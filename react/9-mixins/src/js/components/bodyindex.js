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
	componentWillMount(){
		console.log('bodyIndex will mount')
	}
	componentDidMount(){
		console.log('bodyIndex did mount')
	}
	changeUserInfo(){
		this.setState({
			age: 40,
			name: 'lisi'
		})

		var button = document.querySelector('#submitButton');
		console.log(button);
		// button.style.color = 'red';
		this.refs.submitButton.style.color = 'red';
	}
	render() {
		return (
			<div>
				<h2>这里是页面主体</h2>
				<p>{this.state.age}</p>
				<input ref={(ref=>{console.log('ref add function ');return 'submitButton'})} id="submitButton" type="button" value="submit" onClick={this.changeUserInfo.bind(this)} />
			</div>
		)
	}
}

