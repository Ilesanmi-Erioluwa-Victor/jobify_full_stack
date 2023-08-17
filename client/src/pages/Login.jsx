import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <h1>
      Login
      <Link to={'/register'}>Create account</Link>
    </h1>
  );
};

export default Login;
