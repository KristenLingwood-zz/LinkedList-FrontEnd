import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserProfilePlaceholder from '../../images/user_placeholder.png';
import './style.css';
import propTypes from 'prop-types';
import axios from 'axios';
import { callAPI } from '../../services/api';

const DEFAULT_STATE = {
  searchText: '',
  searchCategoryIdx: 0,
  isDropdownVisible: false
};

export default class Header extends Component {
  state = DEFAULT_STATE;

  handleSearch = async e => {
    e.preventDefault();
    const category = this.state.searchCategoryIdx;
    let searchCat;
    if (category === 0) {
      searchCat = 'companies';
    } else if (category === 1) {
      searchCat = 'jobs';
    } else if (category === 2) {
      searchCat = 'users';
    }
    try {
      await this.props.getSearchResults(searchCat, this.state.searchText);
      this.setState(DEFAULT_STATE); // clear state
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = idx => {
    this.setState({ searchCategoryIdx: idx });
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { searchText, searchCategoryIdx } = this.state;
    const { searchCategories, displayName, profilePic } = this.props;
    console.log('history props', this.props.history);
    return (
      <div className="Header">
        <Link to="/" className="Header-logo">
          LL
        </Link>
        <form className="search-form" onSubmit={this.handleSearch}>
          <div className="search">
            <span className="fas fa-search" />
            <input
              type="text"
              name="searchText"
              placeholder="Search for Companies, Jobs, or People"
              onChange={this.handleChange}
              value={searchText}
            />
          </div>
          <div className="search-categories">
            {searchCategories.map((category, i) => (
              <div key={category}>
                <input
                  type="radio"
                  id={category}
                  checked={i === searchCategoryIdx}
                  onChange={() => this.handleClick(i)}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
          <input type="submit" value="Search" className="search-btn" />
        </form>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="profile-area">
              <img src={profilePic} alt="Profile" />
              <span>{displayName}</span>
            </div>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link
              className="dropdown-item"
              to={`/users/${this.props.currentUser.username}`}
            >
              User Profile
            </Link>
            <button className="dropdown-item" onClick={this.handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  searchCategories: ['companies', 'jobs', 'people'],
  profilePic: UserProfilePlaceholder
};

Header.propTypes = {
  searchCategories: propTypes.string,
  displayName: propTypes.string.isRequired,
  profilePic: propTypes.string
};
