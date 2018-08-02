import React, { Component } from 'react';
import propTypes from 'prop-types';
import ProfileCard from '../ProfileCard';

export default class Profile extends Component {
  render() {
    const user = this.props.currentUser;
    return (
      <div>
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
  }
}
