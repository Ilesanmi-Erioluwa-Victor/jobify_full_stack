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
      },
    ],

    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
