import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const CustomerInfo = ({ customer: { name, contactPerson, phone } }) => (
  <>
    <Typography variant="h6">{name}</Typography>
    <Typography>{contactPerson}</Typography>
    <Typography>тел. {phone}</Typography>
  </>
);

CustomerInfo.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string,
    contactPerson: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};

export default CustomerInfo;
