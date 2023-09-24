import Wrapper from 'assets/wrappers/DashboardFormPage';
import { FormRow, FormRowSelect } from 'components';
import {
  Form,
  redirect,
  useLoaderData,
  useNavigation,
  useParams,
} from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constant';
import { toast } from 'react-toastify';
import { customFetch } from 'utils/CustomFetch';

export const loader = async ({ params }) => {
try {
    const { data } = await customFetch.get(`/jobs/${params.id}`)
} catch (error) {
  
}
};

export const action = async () => {
  return null;
};

const EditJob = () => {
  const { id } = useParams();
  return <div>EditJob</div>;
};

export default EditJob;
