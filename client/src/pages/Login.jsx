import { Link, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
import { customFetch } from 'utils/CustomFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
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
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logging in ...' : 'Submit'}
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
