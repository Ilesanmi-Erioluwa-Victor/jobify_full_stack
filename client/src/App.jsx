import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  Admin,
  DashboardLayout,
  DeleteJob,
  EditJob,
  AddJob,
  AllJobs,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register,
  Profile,
  Stats,
} from './pages';

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '',
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },

      {
        path: 'login',
        element: <Login />,
      },

      {
        path: 'dashboard',
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        children: [
          {
            path: 'admin',
            element: <Admin />,
          },
          {
            element: <AddJob />,
            index: true,
          },

          {
            path: 'edit-job',
            element: <EditJob />,
          },

          {
            path: 'delete-job',
            element: <DeleteJob />,
          },

          {
            path: 'profile',
            element: <Profile />,
          },

          {
            path: 'stats',
            element: <Stats />,
          },

          {
            path: 'all-jobs',
            element: <AllJobs />,
          },
        ],
      },
    ],

    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
