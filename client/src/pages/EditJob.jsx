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
    const { data } = await customFetch.get(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect(`/dashboard/all-jobs`);
  }
};

export const action = async () => {
  return null;
};

const EditJob = () => {
  const { data } = useLoaderData();

  return (
    <Wrapper>
      <Form
        method='post'
        className='form'
      >
        <h4 className='form-title'>edit job</h4>
        <div className="form-center">
          <FormRow type={"text"} name={"position"} defaultValue={data.position}/>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditJob;
