import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SaveApplication from '../common/SaveApplication';
import ApplicantsList from './applicant-list/ApplicantsList';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import AddApplicant from './AddApplicant';

const useStyles = makeStyles(() => ({
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
  addButton: {
    margin: '15px 0',
  },
}));

const Applicants = () => {
  const classes = useStyles();
  const [isFormOpened, setIsFormOpened] = useState(false);

  const formOpen = () => {
    setIsFormOpened((prevState) => !prevState);
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <Typography variant="h5">Заявники</Typography>
      <ApplicantsList />
      <Button
        className={classes.addButton}
        onClick={formOpen}
        variant="outlined"
        color="primary"
      >
        Додати <AddIcon />
      </Button>
      {isFormOpened && <AddApplicant setIsFormOpened={setIsFormOpened} />}
      <SaveApplication />
    </Paper>
  );
};

export default Applicants;
