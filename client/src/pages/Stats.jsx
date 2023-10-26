import { ChartsContainer, StatsContainer } from '../components';
import { useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils/CustomFetch';

export const loader = async () => {
  try {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  } catch (error) {
    return error;
  }
};
const Stats = () => {
  const { defaultStats, monthlyApplications } = useLoaderData();


  return (
    <>
      <StatsContainer defaultStats={defaultStats} />

      {monthlyApplications?.length  && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};

export default Stats;
