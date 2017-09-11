import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Footer extends Component{
  test(id){
	alert(id)
  }
  render(){
	let {person} = this.props;
	let ele = <div id={person.id} onClick={() => {
			this.test(person.id)
		}}>姓名： {person.name}(点击我会触发我自己组件中的方法：弹出我的学号)</div>
    return (
		<div>
			{ele}
			{this.props.children}
		</div>
	)
  }
}
class App extends Component {

	parentClick(){
		alert('我是定义在父级组件中的方法');
	}
  render() {
	let person = {
		id: '001',
		name: '张三'
	};
    return (
      <div className="App">
    		<Footer person={person}>
				<div onClick={this.parentClick}>我是从父组件中传递进来的内容，点击我会触发父组件中定义的方法</div>
			</Footer>
      </div>
    );
  }
}

export default App;
