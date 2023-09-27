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
      <button className='btn  prev-btn'>
        <HiChevronDoubleLeft />
        prev
      </button>

      <div className='btn-container'></div>

      <button className='btn  next-btn'>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
