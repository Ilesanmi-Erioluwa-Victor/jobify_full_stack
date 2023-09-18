import { Link, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
import { customFetch } from 'utils/CustomFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  return null;
};
const Login = () => {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === 'submitting';

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
        <button
          type='submit'
          className='btn btn-block'
        >
          submit{' '}
        </button>
        <button
          type='button'
          className='btn btn-block'
        >
          explore the app
        </button>
        <p>
          Not yet a member ?
          <Link
            to={'register'}
            className='member-btn'
          >
            register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
