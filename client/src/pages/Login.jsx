import {
  Link,
  redirect,
  Form,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
import { customFetch } from 'utils/CustomFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errors = {
    msg: '',
  };
  if (data.password.length < 3) {
    errors.msg = 'Password too short';
    return errors;
  }
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
  // const navigate = useNavigation();
  // const isSubmitting = navigate.state === 'submitting';

  const errors = useActionData();
  return (
    <Wrapper>
      <Form
        method='post'
        className='form'
      >
        <Logo />
        <h4>login</h4>
        {errors?.msg && <p style={{ color: 'red' }}>{errors?.msg}</p>}
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
          // disabled={isSubmitting}
        >
          Submit{/* {isSubmitting ? 'Logging in ...' : 'Submit'} */}
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
      </Form>
    </Wrapper>
  );
};

export default Login;
