import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <Link to={'/login'}>Login to your Account</Link>
    </div>
  );
};

export default Register;