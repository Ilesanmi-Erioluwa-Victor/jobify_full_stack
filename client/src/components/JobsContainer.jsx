import { useAllJobsContext } from 'pages/AllJobs';
import Job from './Job';
import Wrapper from 'assets/wrappers/JobsContainer';

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const jobResult = data;
  if (!jobResult.length) {
    return (
      <Wrapper>
        <h2>No jobs to display</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className='jobs'>
        {jobResult.map((job) => {
          return (
            <Job
              key={job.id}
              {...job}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
