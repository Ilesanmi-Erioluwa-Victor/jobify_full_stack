import {
  Form,
  useNavigation,
  redirect,
  useOutletContext,
} from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { customFetch } from 'utils/CustomFetch';

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
          <button type="submit" className="btn btn-block form-btn">
            {isSubmitting ? "wait..." : "add job"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;
