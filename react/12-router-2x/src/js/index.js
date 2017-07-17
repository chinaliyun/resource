import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';
import Link from 'react-router';

export default class Index extends React.Component{
	render(){
		return (
			<div>
				<ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    {/*<li>
                        <Link to={`/indexlist`}>indxlist</Link>
                    </li>
                    <li>
                        <Link to={`/list/zhansn`}>list</Link>
                    </li>
                    <li>
                        <Link to={`/detail`}>detail</Link>
                    </li>*/}
                </ul>
				<ComponentHeader/>
				<BodyIndex/>
				<ComponentFooter/>
			</div>
		);
	}
}
// ReactDOM.render(<Index/>, document.getElementById('example'));
