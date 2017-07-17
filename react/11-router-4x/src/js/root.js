import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

////////////////////////////////////////////////////////////
// 流程简介：
// 1. 点击「public 页面」
// 2. 点击 「protected 页面」
// 3. 登入
// 4. 点击后退，并且在每一步过程中观察URL的变化

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton/>
      <ul>
        <li><Link to="/public">公开页面</Link></li>
        <li><Link to="/protected">非公开页面</Link></li>
      </ul>
      <Route path="/public" component={Public}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/protected" component={Protected}/>
    </div>
  </Router>
)

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // 模拟异步。
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      欢迎! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>登出</button>
    </p>
  ) : (
    <p>请先登录</p>
  )
))
/*const PrivateRoute = ()=>(
    <h2>PrivateRoute</h2>
  )*/
/*const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)*/
const PrivateRoute = ({component: Component, path: path})=>
    fakeAuth.isAuthenticated?
    (
        <Route path={path} render={(match)=>(<Component/>)}> </Route>
      ):
    (
        <Redirect to={{
            pathname: '/login',
            state: {
                from : path
            }
        }}>

        </Redirect>
        )

/*class PrivateRoute extends React.Component{
  render(){
    console.log(this.props)
    return (
      <h2>PrivateRoute</h2>
      )
  }
}*/

const Public = () => (<h3>公开的页面</h3>)
const Protected = () => (<h3>非公开的页面</h3>)

class Login extends React.Component {
  constructor(){
    super();
       this.state = {
          redirectToReferrer: false
        }
  }
 

  login(){
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    
    return (
      <div>
        <p>若想访问 {from.pathname} ，你需要先登录</p>
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
}
ReactDOM.render(
  <AuthExample/>,
  document.getElementById('example')
  )