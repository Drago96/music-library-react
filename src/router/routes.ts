import { Route } from './route.interface';

import withAnonymousRoute from '../hoc/withAnonymousRoute';

import AnonymousLayout from '../components/Layouts/AnonymousLayout/AnonymousLayout';

import Login from '../containers/Authentication/Login/Login';
import Register from '../containers/Authentication/Register/Register';

export const routes: Route[] = [
  {
    component: withAnonymousRoute(Login),
    layout: AnonymousLayout,
    path: '/login'
  },
  {
    component: withAnonymousRoute(Register),
    layout: AnonymousLayout,
    path: '/register'
  }
];
