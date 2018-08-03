import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import Homepage from '../../containers/Homepage';
import NoAuthRoute from '../../containers/NoAuthRoute';
import ProtectedRoute from '../../containers/ProtectedRoute';
import Profile from '../../containers/Profile';

export default class Main extends Component {
  // async componentDidMount() {
  //   await this.props.getUserProfile(this.props.currentUser);
  // }

  render() {
    return (
      <div className="container">
        <Switch>
          {/* NoAuthRoutes only let you go to them if you haven't authenticated */}
          <NoAuthRoute exact path="/login" component={Login} />
          <NoAuthRoute exact path="/signup" component={Signup} />
          {/* ProtectedRoutes only let you go to them if you are authenticated */}
          <ProtectedRoute exact path="/" component={Homepage} />
          <ProtectedRoute
            exact
            path="/users/:username"
            component={props => <Profile {...props} />}
          />
        </Switch>
      </div>
    );
  }
}
