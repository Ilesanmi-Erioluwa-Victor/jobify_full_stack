import { Outlet } from 'react-router';
import Wrapper from 'assets/wrappers/Dashboard';
import { SmallSideBar, BigSidebar, Navbar } from 'components';

const DashboardLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSideBar />
        <BigSidebar />
      </main>
      <div>
        <Navbar />
        <div className='dashboard-page'>
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};

export default DashboardLayout;
