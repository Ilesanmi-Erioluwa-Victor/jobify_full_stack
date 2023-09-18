import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
import { customFetch } from 'utils/CustomFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigate = useNavigation();
  console.log(navigate);
  const isSubmitting = navigate.state === 'submitting';

  return (
    <Wrapper>
      <Form
        method='post'
        className='form'
      >
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
          labelText={'last name'}
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
          defaultValue={'12345'}
        />

        <button
          className='btn btn-block'
          type='submit'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting' : ' submit'}
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
      </Form>
    </Wrapper>
  );
};

export default Register;
