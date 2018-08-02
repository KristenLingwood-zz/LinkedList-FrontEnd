import React, { Component } from 'react';
import './style.css';

class SearchCard extends Component {
  render() {
    const handleName = this.props.handle
      ? this.props.handle
      : this.props.username;
    const img = this.props.logo ? this.props.logo : this.props.photo;
    const name = this.props.name
      ? this.props.name
      : this.props.first_name + this.props.last_name;
    return (
      <div className="card">
        <img src={img} alt="company logo" />
        <div>
          <p>
            {name} @{handleName}
          </p>
        </div>
        <button>CONTACT</button>
      </div>
    );
  }
}

export default SearchCard;
