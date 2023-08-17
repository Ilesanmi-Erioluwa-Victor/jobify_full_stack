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
  },

  {
    path: '/register',
    element: <Register />,
  },

  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/contact',
    element: <h1>Contact us Page</h1>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
