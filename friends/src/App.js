import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import FriendList from "./FriendList";
import PrivateRoute from "./PrivateRoute";


function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/api/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">FriendList</Link>
           
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
