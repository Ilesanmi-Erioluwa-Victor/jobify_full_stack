import { NavLink } from 'react-router-dom';
import links from 'utils/Links';

import { useDashboardContext } from 'pages/DashboardLayout';

const NavLinks = () => {
  const { toggleSidebar , user} = useDashboardContext();

  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, icon } = link;

        return (
          <NavLink
            to={path}
            key={text}
            className={'nav-link'}
            onClick={toggleSidebar}
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
