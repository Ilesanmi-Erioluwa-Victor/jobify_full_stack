import Wrapper from 'assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
import { useDashboardContext } from 'pages/DashboardLayout';
Wrapper;

const NavBar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          className='toggle-btn'
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h4 className='logo-text'>Dashboard</h4>
          <div className='btn-container'>toggle/logout</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
