import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container} >
          <IndexRoute component={Home} />
          <Route path='/userProfile' component={UserProfile} />
          <Route path='/contacts' component={Contacts} >
            <IndexRoute component={SingleContact} />
          </Route>
        </Route>
      </Router>
    );
  }
}

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

class Nav extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/userProfile'>Profile</Link>&nbsp;
        <Link to='/contacts'>Contacts</Link>
      </div>
    );
  }
}

//different page components
class Home extends Component {
  render() {
    return (<h1>This is the home page</h1>);
  }
}

class UserProfile extends Component {
  render() {
    return (<h1>Your Profile</h1>);
  }
}

class Contacts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<h1>These Are Your Contacts</h1>);
  }
}

class SingleContact extends Component {
  render() {
    return (<h2>This is a single contact</h2>);
  }
}

export default App
