import { JobsContainer, SearchContainer } from 'components';
import { createContext, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from 'utils/CustomFetch';

export const loader = async ({request}) => {
  console.log(request.url)
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ])

  console.log(params)
  try {
    const { data } = await customFetch.get('/jobs');
    return { data };
  } catch (error) {
    toast.error(error?.response?.data.msg);
    return error;
  }
};
const AllJobsContext = createContext();

const AllJobs = () => {
  const { data } = useLoaderData();
  return (
    <AllJobsContext.Provider value={{ data }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
