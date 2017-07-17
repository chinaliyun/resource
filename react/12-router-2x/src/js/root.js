import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import List from './components/list';
import Detail from './components/detail';
import IndexList from './components/indexlist';
import { Router, Route, hashHistory, Link} from 'react-router';
class Root extends React.Component {
    render() {
        const supportsHistory = 'pushState' in window.history;
        // 使用默认的确认函数
        const getConfirmation = (message, callback) => {
            const allowTransition = window.confirm(message)
            callback(allowTransition)
        };
        const  ListReal = ({match})=>{
            console.log(match);
            return  <h1>Hello {match.params.name}!</h1>
        };
        return (
        <Router history={hashHistory}>
            <div>
                
                <Route exact path="/" component={Index}/>
                <Route exact component={IndexList} path='/indexlist'/>
                <Route path="/list/:name" render={ListReal} />
                <Route path="/detail" component={Detail}/>
            </div> 
        </Router>
        )

        
    }
}

ReactDOM.render(
    <Root / >,
        document.getElementById('example')
    )