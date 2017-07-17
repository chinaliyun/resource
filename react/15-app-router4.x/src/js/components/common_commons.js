import React from 'react';
import {
	Card,
	Form,
	Input,
	Button,
	message,
	notification
} from 'antd'

const FormItem  = Form.Item;

class CommonComments extends React.Component{
	constructor(){
		super();
		this.state = {
			comments: ''
		}
	}
	componentWillMount(){
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="+this.props.uniquekey)
			.then(res=>res.json())
			.then(json=>{
				this.setState({
					comments: json.slice(-2, -1)
				})
			})
	}
	handlerSubmit(e){
		e.preventDefault();
		const formData = this.props.form.getFieldsValue();
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userId="+localStorage.userId+"&uniquekey="+this.props.uniquekey+"&commnet="+formData.remark)
			.then(res=>res.json())
			.then(json=>{
				message.success('评论提交成功')
				this.componentWillMount();
				this.props.form.resetFields();
			})
	}		
	addUserCollection(){
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userId="+localStorage.userId+"&uniquekey="+this.props.uniquekey)
			.then(res=>res.json())
			.then(json=>{
				notification.success({
					message: '收藏提醒:',
					description: "收藏文章成功",
					duration: 1
				})
			})
	}
	render(){
		let {getFieldDecorator} = this.props.form;
		const comments = this.state.comments;
		const commentList = this.state.comments.length!=0
		?
			comments.map((item, index)=>(
					<Card title={item.UserName} key={index} style={{position: "relative", marginTop: "10px"}}>	
						<div style={{padding: "20px"}}>
							{item.Comments}
						</div>
						<div className="date" style={{position: 'absolute', right: "10px", top: "10px", color: "red"}}>
							{item.datetime}
						</div>
					</Card>
				))		

		: "没有人评论";
		return (
				<div className="commonCommons">
					{commentList}
					<Form style={{marginTop: "10px"}}>
						<FormItem>
						{getFieldDecorator('remark')(
							<Input type="textarea" placeholder="请输入您的评论"/>
							)
						}
						</FormItem>
						<div style={{testAlign: "center"}}>
							<Button type="primary" htmlType="submit" onClick={this.handlerSubmit.bind(this)}>提交评论</Button>
							&nbsp;&nbsp;&nbsp;
							<Button type="primary" htmlType="button" onClick={()=>this.addUserCollection()}>收藏</Button>
						</div>
					</Form>
				</div>
			)
	}
}
export default CommonComments = Form.create({})(CommonComments)