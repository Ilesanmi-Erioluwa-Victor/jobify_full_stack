import Wrapper from 'assets/wrappers/SmallSidebar';
import { useDashboardContext } from 'pages/DashboardLayout';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import links from 'utils/Links';

const SmallSidebar = () => {
  const data = useDashboardContext();

  return (
    <Wrapper>
      <div className='sidebar-container show-sidebar'>
        <div className='content'>
          <button
            type='button'
            className='close-btn'
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
