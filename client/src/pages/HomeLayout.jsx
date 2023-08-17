import { Outlet } from 'react-router';
const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLayout</h1>
      <h2>
        <Outlet />
      </h2>
    </div>
  );
};

export default HomeLayout;
