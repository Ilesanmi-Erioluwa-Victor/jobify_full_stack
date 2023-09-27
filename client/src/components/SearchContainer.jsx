import Wrapper from 'assets/wrappers/DashboardFormPage';
import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import { Form, useSubmit, Link } from 'react-router-dom';
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from '../../../utils/constant';
import { useAllJobsContext } from 'pages/AllJobs';

const SearchContainer = () => {
  return <h2>SearchContainer</h2>;
};

export default SearchContainer;
