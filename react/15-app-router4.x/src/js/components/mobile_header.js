import React, {Component} from 'react';
import {Link} from 'react-router';
import {Row, 
	Col, 
	Icon, 
	Form, 
	Input, 
	Button, 
	Modal,
	Tabs,
	message,
	Checkbox} from 'antd';
	
import '../../css/mobile.less';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class MobileHeader extends Component{
	constructor(){
		super();
		this.state = {
			current: 'shehui',
			modalVisiable: false,
			action: 'login',
			hasLogined: false,
			userNickName: 'chinaliyun',
			userId: 0
		}
	}
	componentWillMount(){
		if(localStorage.userId && localStorage.userId!=''){
			this.setState({
				hasLogined: true,
				userNickName: localStorage.userNickName,
				userId: localStorage.userId
			})
		}
	}
	setModalVisiable(value){
		this.setState({
			modalVisiable: value
		})
	}
	handlerClick(e){
		this.setState({
			current: e.key
		})
		if(e.key=='register'){
			this.setModalVisiable(true);
		}
	}
	handlerSubmit(e){
		e.preventDefault();
		console.log('submit')
		var formData = this.props.form.getFieldsValue();
		var myFetchOptions = {
			method: 'GET'
		};
		console.log(formData)
		var url = this.state.action=='register'
		?
			"http://newsapi.gugujiankong.com/Handler.ashx?action="+this.state.action+"&username="+formData.r_username+"&password="+formData.r_password+"&confirmPassword="+formData.r_confirmPassword
		:
			"http://newsapi.gugujiankong.com/Handler.ashx?action="+this.state.action+"&username="+formData.username+"&password="+formData.password
		;
		fetch(url)
			.then(res=>res.json())
			.then(json=>{
				console.log(json)
				if(this.state.action=='register'){
					message.success('注册成功')
				}else{
					message.success('登录成功');
					console.log(json)
					this.setState({
						userNickName: json.NickUserName,
						userId: json.UserId,
						hasLogined: true
					})
					
					localStorage.userId = json.UserId;
					localStorage.userNickName = json.NickUserName;
				}	
				
				this.setModalVisiable(false);
			})

	}
	callback(key){
		this.props.form.resetFields();
		if(key==1){
			this.setState({
				action: 'login'
			})
		}else if(key==2){
			this.setState({
				action: 'register'
			})
		}
	}
	render(){
		const { getFieldDecorator, getFieldsValue } = this.props.form;
		var userShow = this.state.hasLogined
		?
			<Link>
				<Icon type="bars"/>
			</Link>
		:
			<Icon type="user" onClick={()=>this.setModalVisiable(true)}/>
		;
		return (
			<header>
				<a href="/" className="logo">
					<img src="/image/logo.png" alt="logo"/>
					<span>ReactNews</span>
				</a> 
				{userShow}
				<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisiable} onCancel={()=>this.setModalVisiable(false)} onOk={()=>this.setModalVisiable(false)}>
				<Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
					<TabPane tab="登录" key="1">
						<Form>
							<FormItem label="账户">
							{getFieldDecorator('username')(
								<Input placeholder="请输入您的账号"/>
							)}
							</FormItem>
							<FormItem label="密码">
							{getFieldDecorator('password')(
								<Input placeholder="请输入您的密码" />
							)}
							</FormItem>
							<Button type="primary" htmlType="button" onClick={this.handlerSubmit.bind(this)}>登录</Button>
						</Form>
					</TabPane>
					<TabPane tab="注册" key="2">
						<Form>
							<FormItem label="账户">
							{getFieldDecorator('r_username')(
								<Input placeholder="请输入您的账号"/>
							)}
							</FormItem>
							<FormItem label="密码">
							{getFieldDecorator('r_password')(
								<Input placeholder="请输入您的密码" />
							)}
							</FormItem>
							<FormItem label="确认密码">
							{getFieldDecorator('r_confirmPassword')(
								<Input placeholder="请再次输入您的密码" />
							)}
							</FormItem>
							<Button type="primary" htmlType="button" onClick={this.handlerSubmit.bind(this)}>注册</Button>
						</Form>
					</TabPane>
				</Tabs>
					
				</Modal>
			</header>
			)
	}
}
export default MobileHeader = Form.create({})(MobileHeader)