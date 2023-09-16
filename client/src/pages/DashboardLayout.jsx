import { useState} from "react"
import { Outlet } from 'react-router';
import Wrapper from 'assets/wrappers/Dashboard';
import { SmallSidebar, BigSidebar, Navbar } from 'components';

const DashboardLayout = () => {
  const user = { name: "John" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const loggedoutUser = async () => {
    
  }

  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />

        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default DashboardLayout;
