import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import SaveApplication from '../common/SaveApplication';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CustomerInfo from './CustomerInfo';
import CustomerSelect from './CustomerSelect';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '25px',
    padding: '20px 25px',
  },
}));

const CustomerPanel = ({ customer }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <Typography variant="h5">Клієнт</Typography>
      <CustomerSelect />
      {customer && <CustomerInfo customer={customer} />}
      <SaveApplication />
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  customer: state.customer.customer,
});

export default connect(mapStateToProps, null)(CustomerPanel);
