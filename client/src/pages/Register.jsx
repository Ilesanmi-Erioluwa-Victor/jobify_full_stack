import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <h1>
      Register
      <Link to={'/login'}>Login to your Account</Link>
    </h1>
  );
};

export default Register;
