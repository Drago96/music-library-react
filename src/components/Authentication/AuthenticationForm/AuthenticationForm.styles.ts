import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  formError: {
    display: 'block',
    color: theme.palette.error.main,
    textAlign: 'center'
  }
}));
