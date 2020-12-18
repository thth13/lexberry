import Typography from '@material-ui/core/Typography';

const CustomerInfo = ({ customer: { name, contactPerson, phone } }) => (
  <>
    <Typography variant="h6">{name}</Typography>
    <Typography>{contactPerson}</Typography>
    <Typography>тел. {phone}</Typography>
  </>
);

export default CustomerInfo;
