import { useAllJobsContext } from 'pages/AllJobs';
import Job from './Job';
import Wrapper from 'assets/wrappers/JobsContainer';

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs, totalJobs, numOfPages } = data;

  if (!data.data.length) {
    return (
      <Wrapper>
        <h2>No jobs to display</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {data.data.map((job) => {
          return (
            <Job
              key={job._id}
              {...job}
            />
          );
        })}
      </div>
      {numOfPages > 1}
    </Wrapper>
  );
};

export default JobsContainer;
