import { useState, createContext, useContext } from 'react';
import { Outlet, useLoaderData, useNavigate, redirect } from 'react-router';
import Wrapper from 'assets/wrappers/Dashboard';
import { SmallSidebar, BigSidebar, Navbar } from 'components';
import { customFetch } from 'utils/CustomFetch';
import { toast } from 'react-toastify';

export const Loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};
const DashboardContext = createContext();

const DashboardLayout = ({ isDarkThemeEnabled }) => {
  const data = useLoaderData();
  const user = data.data;
  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log('Hiii');
    navigate('/');
    await customFetch.get('/auth/logout');
    toast.success('Logged out successfully');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />

          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
