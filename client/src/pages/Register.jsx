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
            className='form-input'
          />
        </div>
        <button className="btn btn-block" type='submit'>submit</button>
      </form>
    </Wrapper>
  );
};

export default Register;
