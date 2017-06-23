import React, {Component} from 'react';
import {Route, Router, hashHistory} from 'react-router';

import 'antd/dist/antd.less';

import '../../css/pc.less';

import PCNewsContainer from './pc_newcontainer.js';
import PCNewsDetail from './pc_news_detail.js';
import PCHeader from './pc_header.js'
import PCFooter from './pc_footer.js'
export default class PCIndex extends Component{
	render(){
		return (
			<div>
				<PCHeader/>
				<Router history={hashHistory}>
					<Route path='/' component={PCNewsContainer} ></Route>
					<Route path='/detail/:uniquekey' component={PCNewsDetail} ></Route>
				</Router>
				<PCFooter/>
			</div>
			)
	}
}