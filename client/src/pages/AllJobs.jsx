import { JobsContainer, SearchContainer } from 'components';
import { createContext, useContext } from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import { customFetch } from 'utils/CustomFetch';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/jobs');
    return { data };
  } catch (error) {
    toast.error(error?.response?.data.msg);
    return error;
  }
};

const AllJobs = () => {
  const { data } = useLoaderData();
  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};

export default AllJobs;
