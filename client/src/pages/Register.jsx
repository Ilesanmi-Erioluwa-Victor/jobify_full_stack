import { Link, Form, useNavigate, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  return null;
};

const Register = () => {
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
      </Form>
    </Wrapper>
  );
};

export default Register;
