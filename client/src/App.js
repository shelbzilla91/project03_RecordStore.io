import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
// import recordList from './components/recordList';
import UserList from './components/UserList';
import SingleUser from './components/SingleUser'

class App extends Component {
  render() {
    // const singleUserComponent =(props)=>
    // <SingleUser 
    // {...props}
    // />
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UserList} />
            <Route exact path="/users/:userId" component={SingleUser}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;