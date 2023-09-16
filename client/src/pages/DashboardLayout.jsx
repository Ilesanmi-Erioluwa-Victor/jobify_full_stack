import { Outlet } from 'react-router';
import Wrapper from 'assets/wrappers/Dashboard';
import { SmallSideBar, BigSideBar } from 'components';

const DashboardLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSideBar />
        <BigSideBar />
      </main>
      <Outlet />
    </Wrapper>
  );
};

export default DashboardLayout;
