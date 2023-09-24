import { Form, Link } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import JobInfo from './JobInfo';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import Wrapper from 'assets/wrappers/Job';
day.extend(advancedFormat);

const Job = ({
  _id,
  company,
  createdAt,
  jobLocation,
  jobStatus,
  jobType,
  position,
}) => {
  const date = day(createdAt).format('MMM Do, YYYY');
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>

      <div className='content'>
        <div className='content-center'>
          <JobInfo
            icon={<FaLocationArrow />}
            text={jobLocation}
          />

          <JobInfo
            icon={<FaCalendarAlt />}
            text={date}
          />

          <JobInfo
            icon={<FaBriefcase />}
            text={jobType}
          />

          <div className={`status ${jobStatus}`}>{jobStatus}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Job;
