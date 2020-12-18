import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SaveApplication from '../common/SaveApplication';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '25px',
    padding: '20px 25px',
  },
  name: {
    fontWeight: 'bolder',
  },
  autocomplete: {
    width: 300,
    marginBottom: 15,
  },
}));

const Applicants = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <Typography variant="h5">Заявники</Typography>
      <SaveApplication />
    </Paper>
  );
};

export default Applicants;
