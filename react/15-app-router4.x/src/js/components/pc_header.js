import React, {Component} from 'react';
import {Link} from 'react-router';
import {Row, 
	Col, 
	Menu, 
	Icon, 
	Form, 
	Input, 
	Button, 
	Modal,
	Tabs,
	message,
	Checkbox} from 'antd';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
class PCHeader extends Component{
	constructor(){
		super();
		this.state = {
			current: 'shehui',
			modalVisiable: false,
			action: 'register',
			hasLogined: false,
			userNickName: 'chinaliyun',
			userId: 0
		}
	}
	componentWillMount(){
		if(localStorage.userId != ''){
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
		this.props.form.resetFields();
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
		console.log(this.props.form)
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
	logout(){
		this.setState({
			hasLogined: false
		})
		localStorage.userId =  '';
		localStorage.userNickName = '';
	}
	render(){
		const { getFieldDecorator, getFieldsValue } = this.props.form;
		const userShow = this.state.hasLogined
		?	
			<Menu.Item key="logout" className="register">
				<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
				<Link target="_target">
					<Button type="dashed" htmlType="button">个人中心</Button>
				</Link>
				<Button type="primary" htmlType="button" onClick={()=>this.logout()}>退出</Button>
			</Menu.Item>
		: 
			<Menu.Item key="register" className="register">
				<Icon type="appstore"></Icon> 登录/注册
			</Menu.Item>
		return (
			<header>
				<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a href="/" className="logo">
							<img src="/image/logo.png" alt="logo"/>
							<span>ReactNews</span>
						</a> 
					</Col>
					<Col span={16}>
						<Menu mode="horizontal" selectedKeys={[this.state.current]}  onClick={this.handlerClick.bind(this)}>
							<Menu.Item key="top">
								<Icon type="appstore"></Icon>头条
							</Menu.Item>
							<Menu.Item key="shehui">
								<Icon type="appstore"></Icon>社会
							</Menu.Item>
							<Menu.Item key="guonei">
								<Icon type="appstore"></Icon>国内
							</Menu.Item>
							<Menu.Item key="guoji">
								<Icon type="appstore"></Icon>国际
							</Menu.Item>
							<Menu.Item key="yule">
								<Icon type="appstore"></Icon>娱乐
							</Menu.Item>
							<Menu.Item key="tiyu">
								<Icon type="appstore"></Icon>体育
							</Menu.Item>
							<Menu.Item key="keji">
								<Icon type="appstore"></Icon>科技
							</Menu.Item>
							<Menu.Item key="shishang">
								<Icon type="appstore"></Icon>时尚
							</Menu.Item>
							{userShow}
						</Menu>
						<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisiable} onCancel={()=>this.setModalVisiable(false)} onOk={()=>this.setModalVisiable(false)}>
						<Tabs type="card" defaultActiveKey="2" onChange={this.callback.bind(this)}>
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
									<Button type="primary" htmlType="button" onClick={this.handlerSubmit.bind(this)} >登录</Button>
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
					</Col>
					<Col span={2}></Col>
				</Row>
				
			</header>
			)
	}
}
export default PCHeader=Form.create()(PCHeader);