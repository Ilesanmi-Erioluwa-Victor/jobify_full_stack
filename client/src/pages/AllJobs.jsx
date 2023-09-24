import { JobsContainer, SearchContainer } from 'components';
import { createContext, useContext } from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import { customFetch } from 'utils/CustomFetch';

export const loader = async () => {
  return null;
};
const AllJobs = () => {
  return <div>AllJobs</div>;
};

export default AllJobs;
