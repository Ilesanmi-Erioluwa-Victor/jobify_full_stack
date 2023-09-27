import Wrapper from 'assets/wrappers/DashboardFormPage';
import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import { Form, useSubmit, Link } from 'react-router-dom';
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from '../../../utils/constant';
import { useAllJobsContext } from 'pages/AllJobs';

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();

  const { search, jobStatus, jobType, sort } = searchValues;

  const submit = useSubmit();

  const debounce = (onChange) => {
    return (e) => {
      const form = e.currentTarget.form;
      console.log('Hello');
      onChange();
    };
  };
  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'>search form</h5>

        <div className='form-center'>
          <FormRow
            type={'search'}
            name={'search'}
            defaultValue={search}
            onChange={debounce(() => {
              console.log('hello');
            })}
          />

          <FormRowSelect
            labelText={'job status'}
            name={'jobStatus'}
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <FormRowSelect
            labelText={'job type'}
            name={'jobType'}
            list={['all', ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <FormRowSelect
            name={'sort'}
            list={[...Object.values(JOB_SORT_BY)]}
            defaultValue={sort}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link
            to={'/dashboard/all-jobs'}
            className='btn form-btn delete-btn'
          >
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
