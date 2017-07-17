import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router';

const Component=React.Component;

export default class PCNewsImageBlock extends Component{
	constructor(){
		super();
		this.state = {
			news: ''
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
		const styleH1 = {
			textOverflow: "ellipsis",
			width: "112px",
			fontSize: '14px',
			overflow: 'hidden',
			whiteSpace: "nowrap"
		};
		const styleImage = {
			display: "block",
			width: this.props.imageWidth,
			height: "92px",
		};
		const newslist = this.state.news.length!=0
		?
			this.state.news.map((item , index)=>(
					<Link to={`detail/${item.uniquekey}`} key={index} width={this.props.width} style={{display: 'inline-block', margin: '0 10px'}}>
						<div className="custom-image">
							<img src={item.thumbnail_pic_s} style={styleImage}/>
						</div>
						<div className="custom-title">
							<h1 style={styleH1}>{item.title}</h1>
							<p>{item.author_name}</p>
						</div>
					</Link>
				))
		: "没有获取到新闻内容";
		return (
			<div  style={{clear: "both", marginBottom: "10px"}}>
				<Card title={this.props.title}>
					{newslist}
				</Card>
			</div>
			)
	}
}