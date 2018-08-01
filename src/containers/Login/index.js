import { connect } from 'react-redux';
import Login from '../../components/Login';
import { authRequest } from '../../store/actions/auth';
import { setError, clearError } from '../../store/actions/error';

function mapStateToProps(reduxState) {
  return {
    error: reduxState.error
  };
}
export default connect(
  mapStateToProps,
  { authRequest, setError, clearError }
)(Login);
