import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>login</h4>
        <FormRow
          type={'email'}
          name={'email'}
          defaultValue={'ericjay1452@gmail.com'}
        />

        <FormRow
          type={'password'}
          name={'password'}
          defaultValue={'ericjay1452@gmail.com'}
        />
      </form>
    </Wrapper>
  );
};

export default Login;
