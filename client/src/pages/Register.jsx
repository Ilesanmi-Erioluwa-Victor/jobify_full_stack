import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      Register
      <Link to={'/login'}>Login to your Account</Link>
    </div>
  );
};

export default Register;
