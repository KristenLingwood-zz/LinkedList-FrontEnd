import { connect } from 'react-redux';
import Main from '../../components/Main';
import { getUserProfile } from '../../store/actions/Profiles';

function mapStateToProps(reduxState) {
  return {
    error: reduxState.error,
    currentUser: reduxState.currentUser
    // username: reduxState.currentUser.username
  };
}
export default connect(
  mapStateToProps,
  null
)(Main);
