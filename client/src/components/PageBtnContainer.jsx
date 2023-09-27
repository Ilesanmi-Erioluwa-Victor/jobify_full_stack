import Wrapper from 'assets/wrappers/PageBtnContainer';
import { useAllJobsContext } from 'pages/AllJobs';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();

  return (
    <Wrapper>
      <button className='btn  btn-prev'>
        <HiChevronDoubleLeft />
        prev
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
