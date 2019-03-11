import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router';

import { routes } from './routes';

const ApplicationRouter: FunctionComponent = () => (
  <Switch>
    {routes.map(route => {
      return (
        <Route
          key={route.path}
          path={route.path}
          exact={true}
          render={() => {
            const RouteLayout = route.layout;
            const RouteComponent = route.component;

            return (
              <RouteLayout>
                <RouteComponent />
              </RouteLayout>
            );
          }}
        />
      );
    })}
  </Switch>
);

export default ApplicationRouter;
