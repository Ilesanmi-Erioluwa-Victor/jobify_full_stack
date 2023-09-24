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
    </Wrapper>
  );
};

export default Job;
