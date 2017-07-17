import React from 'react';
import {Row, Col, BackTop} from 'antd';

import PCNewsImageBlock from './pc_news_image_block.js';
import CommonComments from './common_commons.js';

export default class PCNewsDetail extends React.Component{
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
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={16}>
						<CommonComments uniquekey={this.props.params.uniquekey}/>
						<div className="news_detail" dangerouslySetInnerHTML={this.createMarkup()}></div>
					</Col>
					<Col span={4}>
						<PCNewsImageBlock type="top" count={10} imageWidth="100px"/>
					</Col>
					<Col span={2}></Col>
				</Row>
				<BackTop/>
			</div>
			)
	}
}