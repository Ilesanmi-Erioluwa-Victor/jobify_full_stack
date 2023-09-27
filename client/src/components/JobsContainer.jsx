import { useAllJobsContext } from 'pages/AllJobs';
import Job from './Job';
import Wrapper from 'assets/wrappers/JobsContainer';
import PageBtnContainer from './PageBtnContainer';

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { totalJobs, numOfPages } = data;
  const dataResponse = data.data;
  console.log(data, data, totalJobs, numOfPages);
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
        {totalJobs} job{dataResponse?.length > 1 && 's'} found
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
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
