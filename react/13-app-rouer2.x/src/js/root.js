import React from 'react';
import {render} from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';
import MediaQuery from 'react-responsive';
import PCIndex from './components/pc_index.js';
import MobileIndex from './components/mobile_index.js';
import MobileNewsDetail from './components/mobile_news_detail.js';
class Root extends React.Component{
	render(){
		return (
			<div>
				<MediaQuery query="(min-device-width: 1224px)">
					<PCIndex/>
				</MediaQuery>
				<MediaQuery query="(max-device-width: 1224px)">
					<Router history={hashHistory}>
						<Route path="/" component={MobileIndex}> </Route>
						<Route path="/detail/:uniquekey" component={MobileNewsDetail}> </Route>
					</Router>
				</MediaQuery>
				
			</div>
			)
	}
}
render(
	<Root/>,
	document.getElementById('appContainer')
	)