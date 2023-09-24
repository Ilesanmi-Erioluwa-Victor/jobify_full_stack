import Wrapper from 'assets/wrappers/StatsContainer';
import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from 'utils/CustomFetch';

export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');

    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard');
  }
};
const Admin = () => {
  return <Wrapper>AdminPage</Wrapper>;
};

export default Admin;
