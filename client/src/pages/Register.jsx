import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow
          type={'text'}
          name={'name'}
          defaultValue={'Erioluwa'}
        />

        <FormRow
          type={'text'}
          name={'lastName'}
          labelText={"last name"}
          defaultValue={'Ilesnmi'}
        />

        <FormRow
          type={'text'}
          name={'location'}
          defaultValue={'earth'}
        />

        <FormRow
          type={'email'}
          name={'email'}
          defaultValue={'ericjay1452@gmail.com'}
        />

        <FormRow
          type={'password'}
          name={'password'}
          defaultValue={'Erioluwa'}
        />

        <button
          className='btn btn-block'
          type='submit'
        >
          submit
        </button>
        <p>
          Already a member ?
          <Link
            to={'/login'}
            className='member-btn'
          >
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
