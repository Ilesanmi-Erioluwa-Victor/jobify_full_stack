import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

import { customFetch } from 'utils/CustomFetch';
import Wrapper from 'assets/wrappers/StatsContainer';
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { StatItem } from 'components';

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
  const { users, jobs } = useLoaderData();
  return (
    <Wrapper>
      <StatItem
        title={'current users'}
        count={users}
        color={'#e9b949'}
      />
    </Wrapper>
  );
};

export default Admin;
