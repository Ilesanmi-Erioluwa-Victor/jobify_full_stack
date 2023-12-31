import { Form, Link } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import JobInfo from './JobInfo';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Job';
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
        <div className='main-icon'>
          {!company ? 'Default' : company.charAt(0)}
        </div>
        <div className='info'>
          <h5>{position}</h5>
          <p> {!company ? 'Default' : company.charAt(0)}</p>
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

          <div className={`status ${jobStatus}`}>
            {!jobStatus ? 'default' : jobStatus}
          </div>
          <footer className='actions'>
            <Link
              className='btn edit-btn'
              to={`../edit-job/${_id}`}
            >
              Edit
            </Link>
            <Form
              method='post'
              action={`../delete-job/${_id}`}
            >
              <button
                type='submit'
                className='btn delete-btn'
              >
                Delete
              </button>
            </Form>
          </footer>
        </div>
      </div>
    </Wrapper>
  );
};

export default Job;
