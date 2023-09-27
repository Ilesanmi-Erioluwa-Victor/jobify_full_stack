import Wrapper from 'assets/wrappers/PageBtnContainer';
import { useAllJobsContext } from 'pages/AllJobs';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const handlePageChange = (pageNumber) => {
    
  }
  return (
    <Wrapper>
      <button className='btn  prev-btn'>
        <HiChevronDoubleLeft />
        prev
      </button>

      <div className='btn-container'>
        {pages.map((pageNumber) => {
          return (
            <button
              className={`btn page-btn ${
                pageNumber === currentPage && 'active'
              }`}
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button className='btn  next-btn'>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
