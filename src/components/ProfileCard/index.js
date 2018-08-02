import React, { Component } from 'react';
import propTypes from 'prop-types';
import './style.css';

export default class ProfileCard extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="user pic" />
        <div>
          <p>{this.props.first + ' ' + this.props.last}</p>
          <p>Employed By {this.props.currCompany}</p>
        </div>
      </div>
    );
  }
}
