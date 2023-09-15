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
        element: <DashboardLayout />,
        children: [
          {
            path: 'admin',
            element: <Admin />,
          },
          {
            path: 'add-job',
            element: <AddJob />,
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
            path: 'jobs',
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
