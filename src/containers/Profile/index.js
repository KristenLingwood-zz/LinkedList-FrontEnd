import { connect } from 'react-redux';
import Profile from '../../components/Profile';

function mapStateToProps(reduxState) {
  return {
    isAuthenticated: reduxState.auth.isAuthenticated,
    currentUser: reduxState.currentUser
  };
}

export default connect(
  mapStateToProps,
  null
)(Profile);
