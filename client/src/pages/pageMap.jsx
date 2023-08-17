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
} from './';

export const pageMap = [
  {
    path: '/',
    render: HomeLayout,
    children: [
      {
        path: 'register',
        renderChild: Register,
      },

      {
        path: 'login',
        renderChild: Login,
      },

      {
        path: 'dashboard',
        renderChild: DashboardLayout,
      },
    ],
  },
];
