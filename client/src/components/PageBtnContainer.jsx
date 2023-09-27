import Wrapper from 'assets/wrappers/PageBtnContainer';
import { useAllJobsContext } from 'pages/AllJobs';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();

 
  return <h1>PageBtnContainer</h1>;
};

export default PageBtnContainer;
