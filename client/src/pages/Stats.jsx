import { ChartsContainer, StatsContainer } from '../components';
import { useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils/CustomFetch';
import { useQuery } from '@tanstack/react-query';

export const loader = async () => {
  return null;
};
const Stats = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['stats'],
    queryFn: () => customFetch.get('/jobs/stats'),
  });

  if (isLoading) return <h4>Loading....</h4>;

  if (isError) return <h4>Error....</h4>;

  const { defaultStats, monthlyApplications } = data.data;

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />

      {monthlyApplications?.length && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};

export default Stats;
