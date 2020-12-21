import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createApplication } from '../../actions/application';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 15,
    display: 'block',
  },
}));

const SaveApplication = ({ createApplication }) => {
  const classes = useStyles();

  const handleClick = () => {
    createApplication();
  };

  return (
    <Button
      onClick={handleClick}
      className={classes.button}
      color="primary"
      variant="contained"
    >
      Зберегти заявку
    </Button>
  );
};

export default connect(null, { createApplication })(SaveApplication);
