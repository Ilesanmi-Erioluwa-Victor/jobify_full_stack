import Wrapper from 'assets/wrappers/DashboardFormPage';
import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import { Form, useSubmit, Link } from 'react-router-dom';
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from '../../../utils/constant';
import { useAllJobsContext } from 'pages/AllJobs';

const SearchContainer = () => {
  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'>search form</h5>

        <div className='form-center'>
          <FormRow
            type={'search'}
            name={'search'}
            defaultValue={'a'}
          />
          <FormRowSelect
            labelText={'job status'}
            name={'jobStatus'}
            list={['all', Object.values(JOB_STATUS)]}
            defaultValue='all'
          />

          <FormRowSelect
            labelText={'job type'}
            name={'jobType'}
            list={['all', Object.values(JOB_TYPE)]}
            defaultValue='all'
          />
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
