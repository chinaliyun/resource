import React from 'react';
import {Link} from 'react-router';

const Component = React.Component;

export default class MobileList extends Component{
	constructor(){
		super();
		this.state = {
			news: ''
		}
	}
	componentWillMount(){
		const myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count)
			.then(res=>res.json())
			.then(json=>this.setState({news: json}))
	}
	render(){
		const newslist = this.state.news.length!=0
		?
			this.state.news.map((item, index)=>(
				<li className="m_list_item" key={index}>
					<Link to={`detail/${item.uniquekey}`}>
						<div className="m_article_img">
							<img src={item.thumbnail_pic_s} />
						</div>
						<div className="m_article_info">
							<div className="m_article_title">
								{item.title}
							</div>
							<div className="m_article_desc"><span className="m_article_type">{item.type}</span> {item.date}</div>
						</div>
					</Link>
				</li>
				))
		: '没有获取到数据';
		return (
			<ul>
				{newslist}
			</ul>
			)
	}
}