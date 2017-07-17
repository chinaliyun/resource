import React  from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

// import HelloWorld from './helloworld.jsx';

const root = document.querySelector('#root');

const Home = ()=>{
	return (<div>
		<h1>首页</h1>
	</div>)
}
const About = ()=>{
	return (<div>
		<h1>关于</h1>
	</div>)
}
const Topics = ()=>{
	return (<div>
		<h1>专题</h1>
	</div>)
}
const  App = ()=>{
	return (
		<Router forceRefresh={false}>
			<div>
			<ul>
				<li><Link to="/">首页</Link></li>
				<li><Link to="/about/?fdfff#dw">关于</Link></li>
				<li><Link to="/topics/">专题</Link></li>
			</ul>
			
				<Route exact  path="/" render={Home}/>
				<Route exact  path="/about" render={About}/>
				<Route exact  path="/topics/" render={Topics}/>
				<Route render={(props)=>{
					const {history, location, match} = props;
					console.log(history)
					console.log(location)
					console.log(match)
					return (<h1>{history.length}</h1>)
				}} />
			</div>
		</Router>
			)
}
render(<App/>, root)
