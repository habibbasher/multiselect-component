import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  error: {
    color: '#f44336',
  },
  select: {
    minWidth: 120,
  },
  firstColumn: {
    minWidth: 150,
  },
  secondColumn: {
    minWidth: 150,
    marginLeft: 20,
  },
  multiSelect: {
    width: '100%',
    position: 'relative',
  },
  mainContainer: {
    position: 'absolute',
  },
  gridItem: {
    margin: '3em',
  },
  body: {
    color: '#000',
  },
}));
