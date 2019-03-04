import { ComponentClass } from 'react';

export interface Route {
  path: string;
  component: ComponentClass;
}
