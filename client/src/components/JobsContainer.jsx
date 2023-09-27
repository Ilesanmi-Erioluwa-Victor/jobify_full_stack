import { useAllJobsContext } from 'pages/AllJobs';
import Job from './Job';
import Wrapper from 'assets/wrappers/JobsContainer';

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const {kobs, totalJobs, numOfPages } =data
  if (!data.data.length) {
    return (
      <Wrapper>
        <h2>No jobs to display</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default JobsContainer;
