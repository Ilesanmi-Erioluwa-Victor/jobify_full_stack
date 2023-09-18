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
  return <div>AddJob</div>;
};

export default AddJob;
