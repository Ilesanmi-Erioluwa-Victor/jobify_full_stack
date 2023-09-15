import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
       
        <button className="btn btn-block" type='submit'>submit</button>
        <p>Already a member ? 
          <Link to={"/login"} className='member-btn'>Login</Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
