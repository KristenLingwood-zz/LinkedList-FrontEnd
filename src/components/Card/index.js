import React, { Component } from 'react';
import './style.css';

class Card extends Component {
  render() {
    // const { logo, title, salary, equity, company } = this.props.jobs;
    return (
      <div className="card">
        <img src={this.props.logo} alt="company logo" />
        <div>
          <p>
            {this.props.title} @{this.props.company}
          </p>
          <p>
            {this.props.salary} | {this.props.equity}
          </p>
        </div>
        <button>APPLY</button>
      </div>
    );
  }
}

export default Card;
