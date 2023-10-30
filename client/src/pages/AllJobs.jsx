import { JobsContainer, SearchContainer } from '../components';
import { createContext, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils/CustomFetch';
import { useQuery } from '@tanstack/react-query';

const allJobsQuery = (params) => {
  return {
    queryKey: ['jobs'],
    queryFn: async () => {
      const { data } = await customFetch.get('/jobs', { params });

      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    await queryClient.ensureQueryData(allJobsQuery(params));
    return { searchValues: { ...params } };
  };
const AllJobsContext = createContext();
const AllJobs = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allJobsQuery(searchValues));
  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
