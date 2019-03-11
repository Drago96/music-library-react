import { Route } from './route.interface';

import withAnonymousRoute from '../hoc/withAnonymousRoute';

import AnonymousLayout from '../components/Layouts/AnonymousLayout/AnonymousLayout';

import Login from '../components/Authentication/Login/Login';

export const routes: Route[] = [
  {
    component: withAnonymousRoute(Login),
    layout: AnonymousLayout,
    path: '/login'
  }
];
