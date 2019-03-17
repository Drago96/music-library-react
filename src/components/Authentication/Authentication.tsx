import React, { FunctionComponent, ReactNode } from 'react';
import { Card, CardHeader, CardContent, CardActions } from '@material-ui/core';

import { useStyles } from './Authentication.styles';

import PaperHeader from '../UI/PaperHeader/PaperHeader';

interface OwnProps {
  title: string;
  components: {
    form: () => ReactNode;
    actions: () => ReactNode;
  };
}

const Authentication: FunctionComponent<OwnProps> = ({
  title,
  components: { form, actions }
}) => {
  const classes = useStyles();

  return (
    <Card raised={true} className={classes.root}>
      <CardHeader component={() => <PaperHeader title={title} />} />
      <CardContent>{form()}</CardContent>
      <CardActions>{actions()}</CardActions>
    </Card>
  );
};

export default Authentication;
