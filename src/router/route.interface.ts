import { ComponentType } from 'react';

export interface Route {
  path: string;
  component: ComponentType<any>;
  layout: ComponentType<any>;
}
