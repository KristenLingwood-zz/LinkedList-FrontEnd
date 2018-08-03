import React, { Component } from 'react';
import propTypes from 'prop-types';
import ProfileCard from '../ProfileCard';
import Header from '../../containers/Header';

export default class Profile extends Component {
  componentDidMount() {
    this.props.getOtherUserProfile(this.props.otherUser);
  }
  render() {
    console.log('profile props', this.props);
    const user = this.props.currentUser;
    const otherUser = this.props.otherUser;
    if (this.props.currentUser.username === this.props.otherUser) {
      return (
        <div>
          <Header />
          <h1>Profile</h1>
          <ProfileCard
            first={user.first_name}
            last={user.last_name}
            username={user.username}
            currCompany={user.current_company}
            img={user.photo}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <h1>Profile</h1>
          <ProfileCard
            first={otherUser.first_name}
            last={otherUser.last_name}
            username={otherUser.username}
            currCompany={otherUser.current_company}
            img={otherUser.photo}
          />
        </div>
      );
    }
  }
}
