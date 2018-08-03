import { connect } from 'react-redux';
import Header from '../../components/Header';
import { logout } from '../../store/actions/auth';
import { fetchJobsRequest } from '../../store/actions/jobs';
import { getSearchResults } from '../../store/actions/search';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser
  };
}

export default connect(
  mapStateToProps,
  { logout, fetchJobsRequest, getSearchResults }
)(Header);
