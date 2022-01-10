/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, FunctionComponent } from 'react';
import { Route } from 'react-router-dom';

type RouteProps = { component: React.FC; rest: undefined };

export const OpenRoutes: FunctionComponent<any> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ ...props }) => {
        return <Component {...props} />;
      }}
    />
  );
};
