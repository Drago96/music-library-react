import React, { FunctionComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@material-ui/core';
import { LinkProps } from '@material-ui/core/Link';

interface AppLinkProps extends LinkProps {
  to: string;
}

export const Link: FunctionComponent<AppLinkProps> = props => (
  <MuiLink {...props} component={RouterLink as any} />
);
