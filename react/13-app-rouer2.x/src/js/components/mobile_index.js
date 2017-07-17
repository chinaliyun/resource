import React, {Component} from 'react';
import {Tabs} from 'antd';
import MobileHeader from './mobile_header.js';
import MobileFooter from './mobile_footer.js';
import MobileList from './mobile_list.js';

const TabPane = Tabs.TabPane;

export default class MobileIndex extends Component{
	render(){
		return (
			<div id="mobile">
				<MobileHeader/>
				<Tabs  defaultActiveKey="top">
					<TabPane tab="头条" key="top">
						<MobileList type="top" count={10} />
					</TabPane>
					<TabPane tab="社会" key="shehui">
						<MobileList type="shehui" count={10} />
					</TabPane>
					<TabPane tab="国内" key="guonei">
						<MobileList type="guonei" count={10} />
					</TabPane>
					<TabPane tab="国际" key="guoji">
						<MobileList type="guoji" count={10} />
					</TabPane>
					<TabPane tab="娱乐" key="yule">
						<MobileList type="yule" count={10} />
					</TabPane>
					<TabPane tab="体育" key="tiyu">
						<MobileList type="tiyu" count={10} />
					</TabPane>
					<TabPane tab="科技" key="keji">
						<MobileList type="keji" count={10} />
					</TabPane>
					<TabPane tab="时尚" key="shishang">
						<MobileList type="shishang" count={10} />
					</TabPane>
				</Tabs>
				<MobileFooter/>
			</div>
			)
	}
}