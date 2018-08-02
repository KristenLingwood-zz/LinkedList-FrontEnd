import { connect } from 'react-redux';
import Login from '../../components/Login';
import { authRequest } from '../../store/actions/auth';
import { setError, clearError } from '../../store/actions/error';
import { getUserProfile } from '../../store/actions/Profiles';

function mapStateToProps(reduxState) {
  return {
    error: reduxState.error,
    currentUser: reduxState.currentUser
  };
}
export default connect(
  mapStateToProps,
  { authRequest, setError, clearError, getUserProfile }
)(Login);
