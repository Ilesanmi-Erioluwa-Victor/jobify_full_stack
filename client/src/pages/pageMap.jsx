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
        path: '',
        index: true,
        renderChild: Landing,
      },
      {
        path: 'register',
        index: false,
        renderChild: Register,
      },

      {
        path: 'login',
        index: false,
        renderChild: Login,
      },

      {
        path: 'dashboard',
        index: false,
        renderChild: DashboardLayout,
      },
    ],
  },
];
