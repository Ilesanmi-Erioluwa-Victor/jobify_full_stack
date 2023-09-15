import { Link } from 'react-router-dom';
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo } from "../components"

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h1>Register</h1>
      </form>
    </Wrapper>
  );
};

export default Register;
