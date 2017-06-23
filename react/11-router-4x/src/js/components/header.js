import React from 'react';
import ReactDOM from 'react-dom';

export default class ComponentHeader extends React.Component {
	constructor(){
		super();
		this.state = {
			miniHeader: false
		}
	}
	switchHeader(){
		this.setState({
			miniHeader : !(this.state.miniHeader)
		})
		console.log(this.state.miniHeader);
	}
	render() {
		const styleComponentHeader = {
			header: {
				backgroundColor: '#333',
				color: 'red',
				fontSize: (this.state.miniHeader) ? '15px' : '30px',
				// "padding-top": "20px",//这种写法react会提示警告，要求流使用JSX的模式，即paddingTop
				paddingBottom: '20px'
			}
		};
		return (
			<h1 style={styleComponentHeader.header} onClick={this.switchHeader.bind(this)} className="smaillFontSize" >这是头部</h1>
		)
	}
}
