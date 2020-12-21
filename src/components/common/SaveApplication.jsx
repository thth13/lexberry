import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 15,
    display: 'block',
  },
}));

const SaveApplication = () => {
  const classes = useStyles();

  return (
    <Button className={classes.button} color="primary" variant="contained">
      Зберегти заявку
    </Button>
  );
};

export default SaveApplication;
