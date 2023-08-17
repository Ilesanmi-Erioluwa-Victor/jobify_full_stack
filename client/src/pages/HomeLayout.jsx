import { Outlet } from 'react-router';
const HomeLayout = () => {
  return (
    <div>
      <nav>Nav.Bar !!!</nav>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
