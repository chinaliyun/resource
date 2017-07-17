import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router';

const Component = React.Component;

export default class PCNewsBlock extends Component{
	constructor(){
		super();
		this.state = {
			news: ""
		}
	}
	componentWillMount(){
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count)
			.then(res=>res.json())
			.then(json=>this.setState({news: json}))
	}
	render(){
		const newList = this.state.news.length!=0
		?
			this.state.news.map((newitem, index)=>(
				<li key={index}>
					<Link to={`detail/${newitem.uniquekey}`}>{newitem.title}</Link>
				</li>
				
			))
		: "没有任何数据";
		return (
			<div>
				<Card>
					<ul>
						{newList}
					</ul>
				</Card>
			</div>
			)
	}
}