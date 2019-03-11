import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  header: {
    padding: '1.5rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: theme.palette.primary.dark
  }
}));
