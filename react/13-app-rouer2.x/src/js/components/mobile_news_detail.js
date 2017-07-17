import React from 'react';
import {Row, Col} from 'antd';

import MobileHeader from './mobile_header.js';
import CommonComments from './common_commons.js';

export default class MobileNewsDetail extends React.Component{
	constructor(){
		super();
		this.state = {
			newsItem: ''
		}
	}
	componentWillMount(){
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="+this.props.params.uniquekey)
			.then(res=>res.json())
			.then(json=>{
				this.setState({
					newsItem: json
				})
			})
	}
	createMarkup(){
		return {__html: this.state.newsItem.pagecontent}
	}
	render(){
		return (
			<div  id="mobile">
				<MobileHeader />
				<Row>
					<Col span={2}></Col>
					<Col span={20}>
						<div dangerouslySetInnerHTML={this.createMarkup()}></div>
						<CommonComments uniquekey={this.props.params.uniquekey}/>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
			)
	}
}