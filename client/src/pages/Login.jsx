import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to={'/register'}>Create account</Link>
    </div>
  );
};

export default Login;
