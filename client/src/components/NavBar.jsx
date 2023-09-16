import Wrapper from 'assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
Wrapper;

const NavBar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <button className='toggle-btn'>
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
