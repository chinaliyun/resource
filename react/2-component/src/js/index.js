import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';

class Index extends React.Component{
	render(){
		/* 注意： 组建名也是可以使用变量代替的，比如：
		var componentHeader = <ComponentHeader/>
		return (
			<div>
				注意：使用变量名的时候，前后要使用{}符号
				{componentHeader}
				<BodyIndex/>
				<ComponentFooter/>
			</div>
		)*/
		return (
			<div>
				<ComponentHeader/>
				<BodyIndex/>
				<ComponentFooter/>
			</div>
		);
	}
}
ReactDOM.render(<Index/>, document.getElementById('example'));
