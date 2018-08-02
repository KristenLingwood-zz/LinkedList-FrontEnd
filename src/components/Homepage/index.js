import React, { Component } from 'react';
import propTypes from 'prop-types';
import Header from '../../containers/Header';
import './style.css';
import Card from '../Card';
import SearchCard from '../SearchCard';

export default class Homepage extends Component {
  componentDidMount() {
    this.props.fetchJobsRequest();
  }

  render() {
    const { jobs, searchResults } = this.props;
    let displayJobs;

    if (searchResults.length > 0 && searchResults[0].salary) {
      const results = this.props.searchResults.map(res => (
        <Card
          key={res.id}
          title={res.title}
          company={res.company}
          salary={res.salary}
          equity={res.equity}
          logo={res.logo}
        />
      ));
      return (
        <div>
          <Header username={this.props.currentUser.username} />
          <div className="feed">
            <h1>Search Results</h1>
            {results}
          </div>
        </div>
      );
    } else if (searchResults.length > 0) {
      const results = this.props.searchResults.map(res => (
        <SearchCard
          key={res.id}
          name={res.name}
          first_name={res.first_name}
          last_name={res.last_name}
          handle={res.handle}
          username={res.username}
          logo={res.logo}
          photo={res.photo}
        />
      ));
      return (
        <div>
          <Header />
          <div className="feed">
            <h1>Search Results</h1>
            {results}
          </div>
        </div>
      );
    } else if (jobs.length === 0) {
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
