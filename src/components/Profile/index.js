import React, { Component } from 'react';
import propTypes from 'prop-types';
import ProfileCard from '../ProfileCard';
import Header from '../../containers/Header';
import Card from '../Card';

export default class Profile extends Component {
  componentDidMount() {
    this.props.getOtherUserProfile(this.props.match.params.username);
    const jobsData = this.props.currentUser.applied_to.map(job => {
      this.props.fetchSpecificJobRequest(job);
    });
  }

  render() {
    const {
      id,
      title,
      company,
      salary,
      equity
    } = this.props.currentUser.applied_to;
    const appliedJobs = this.props.currentUser.applied_to.map(job => {
      <Card
        key={this.props.id}
        title={this.props.title}
        company={this.props.company}
        salary={this.props.company}
        equity={this.props.equity}
      />;
    });
    const user = this.props.currentUser;
    const otherUser = this.props.otherUser;
    if (this.props.currentUser.username === this.props.match.params.username) {
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
          {appliedJobs}
        </div>
      );
    } else {
      return (
        <div>
          <Header history={this.props.history} />
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
