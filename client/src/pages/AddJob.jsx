import {
  Form,
  useNavigation,
  redirect,
  useOutletContext,
} from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constant';
import { customFetch } from 'utils/CustomFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/jobs', data);
    toast.success('Job added successfully');
    return redirect('all-jobs');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddJob = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form
        className='form'
        method='post'
      >
        <h4 className='form-title'>add job</h4>
        <div className='form-center'>
          <FormRow
            type={'text'}
            name={'position'}
          />
          <FormRow
            type={'text'}
            name={'company'}
          />
          <FormRow
            type={'text'}
            name={'jobLocation'}
            labelText={'job location'}
            defaultValue={user.location}
          />
          <FormRowSelect
            labelText={'job status'}
            name={'jobStatus'}
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />

          <FormRowSelect
            labelText={'job type'}
            name={'jobType'}
            defaultValue={JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
          />

          <button
            type='submit'
            className='btn btn-block form-btn'
          >
            {isSubmitting ? 'wait...' : 'add job'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;
