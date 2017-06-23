import React from 'react';
import {Row, Col, Carousel, Tabs} from 'antd';
import PCNewsBlock from './pc_news_block.js';
import PCNewsImageBlock from './pc_news_image_block.js';

const Component = React.Component;
const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends Component{

	render(){
		const setting = {
			autoplay: true,
			dots: true
		};
		return (
				<Row>
					<Col span={2}></Col>
					<Col span={20}>
						<div className="container">
							<div className="leftContainer">
								<Carousel {...setting} >
									<div><img src="/image/carousel_1.jpg"/></div>
									<div><img src="/image/carousel_2.jpg"/></div>
									<div><img src="/image/carousel_3.jpg"/></div>
								</Carousel>
								<div className="newsImageBlock">
									<PCNewsImageBlock type="top" count={6} width="400px" title="国际新闻" imageWidth="110px" />
								</div>
							</div>
							<div className="tab_news">
								<Tabs tab="card">
									<TabPane tab="头条新闻" key="1">
										<PCNewsBlock type="top" count={18}/>
									</TabPane>
									<TabPane tab="国际新闻" key="2">
										<PCNewsBlock type="guoji" count={18}/>
									</TabPane>
								</Tabs>
							</div>
							<div className="">
								<PCNewsImageBlock type="guonei" count={10} width="1200px" title="国内新闻" imageWidth="114px" />
								<PCNewsImageBlock type="yule" count={20} width="1200px" title="娱乐新闻" imageWidth="116px" />
							</div>
						</div>

					</Col>
					<Col span={2}></Col>
				</Row>
			)
	}
}