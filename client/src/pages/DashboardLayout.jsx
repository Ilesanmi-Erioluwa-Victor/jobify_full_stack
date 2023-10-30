import { useState, createContext, useContext } from 'react';
import {
  Outlet,
  useLoaderData,
  useNavigate,
  redirect,
  useNavigation,
} from 'react-router';
import Wrapper from '../assets/wrappers/Dashboard';
import { SmallSidebar, BigSidebar, Navbar, Loading } from '../components';
import { customFetch } from '../utils/CustomFetch';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
       const { data } = await customFetch.get('/users/current-user'); 
    return data.data;
  },
};

export const Loader =(queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    return redirect('/');
  }
};
const DashboardContext = createContext();

const DashboardLayout = ({ isDarkThemeEnabled, queryClient }) => {
  const user
    = useQuery(userQuery).data;
  console.log(user)
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);
 console.log(user)
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
              {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
