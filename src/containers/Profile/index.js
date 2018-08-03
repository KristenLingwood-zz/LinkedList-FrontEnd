import { connect } from 'react-redux';
import Profile from '../../components/Profile';
import { getOtherUserProfile } from '../../store/actions/OtherUser';

function mapStateToProps(reduxState) {
  return {
    isAuthenticated: reduxState.auth.isAuthenticated,
    currentUser: reduxState.currentUser,
    otherUser: reduxState.otherUser
  };
}

export default connect(
  mapStateToProps,
  { getOtherUserProfile }
)(Profile);
