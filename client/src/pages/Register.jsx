import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <div className='form-row'>
          <label
            htmlFor='name'
            className='form-label'
          >
            name
          </label>
          <input
            type='text'
            id='name'
            name='name'
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;
