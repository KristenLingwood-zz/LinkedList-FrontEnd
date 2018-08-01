import React, { Component } from 'react';
import propTypes from 'prop-types';
import Header from '../../containers/Header';
import './style.css';
import Card from '../Card';

export default class Homepage extends Component {
  componentDidMount() {
    this.props.fetchJobsRequest();
  }

  render() {
    const { jobs } = this.props;
    let displayJobs;
    if (jobs.length === 0) {
      displayJobs = (
        <h3>Sorry, no jobs are available right now. Please try again later.</h3>
      );
    } else {
      displayJobs = this.props.jobs.map(job => (
        <Card
          key={job.id}
          title={job.title}
          company={job.company}
          salary={job.salary}
          equity={job.equity}
          logo={job.logo}
        />
      ));
    }

    return (
      <div>
        <Header />
        <div className="feed">
          <h1>Jobs</h1>
          {displayJobs}
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  jobs: propTypes.arrayOf(propTypes.object),
  fetchJobsRequest: propTypes.func
};
