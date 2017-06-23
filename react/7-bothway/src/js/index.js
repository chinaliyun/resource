import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';

class Index extends React.Component{
	componentWillMount(){
		// 定义逻辑即可
		console.log('index will mount');
	}
	componentDidMount(){
		console.log('index did mount');
	}
	render(){
		return (
			<div>
				<ComponentHeader/>
				{/*props对于模块来讲属于外来属性*/}
				<BodyIndex userId={12356} />
				<ComponentFooter/>
			</div>
		);
	}
}
ReactDOM.render(<Index/>, document.getElementById('example'));
