import Wrapper from 'assets/wrappers/DashboardFormPage';
import { FormRow } from 'components';
import { Form, useNavigation, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from 'utils/CustomFetch';

const Profile = () => {
  const { user } = useOutletContext();

  const { name, lastName, email, location } = user;

  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form
        method='post'
        className='form'
      >
        <h4 className='form-title'>profile</h4>

        <div className='form-center'>
          <div className='form-row'>
            <label
              htmlFor='avatar'
              className='form-label'
            >
              Select an image file (max 0.5MB)
            </label>
          </div>

          <FormRow
            type={'text'}
            name={'name'}
            defaultValue={name}
          />

          <FormRow
            type={'text'}
            name={'lastName'}
            labelText={'last name'}
            defaultValue={lastName}
          />

          <FormRow
            type={'email'}
            name={'email'}
            defaultValue={email}
          />

          <FormRow
            type={'text'}
            name={'location'}
            defaultValue={location}
          />
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
