import React, { FunctionComponent } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useStyles } from './PaperHeader.styles';

interface OwnProps {
  title: string;
}

const PaperHeader: FunctionComponent<OwnProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.header}>
      <Typography variant={'h5'}>{title}</Typography>
    </Paper>
  );
};

export default PaperHeader;
