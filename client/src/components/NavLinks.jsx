import { NavLink } from 'react-router-dom';
import links from 'utils/Links';

const { useDashboardContext } = require('pages/DashboardLayout');

const NavLinks = () => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, icon } = link;

        return (
          <NavLink
            to={path}
            key={text}
            className={'nav-link'}
          ></NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
