import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { deleteApplicant } from '../../../actions/applicant';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  typography: {
    marginRight: 5,
  },
  typographyName: {
    fontWeight: 'bolder',
    marginRight: 5,
  },
  checkbox: {
    paddingLeft: 0,
  },
  applicantItem: {
    display: 'flex',
    alignItems: 'center',
  },
  applicantInfoBlock: {
    display: 'flex',
  },
  [theme.breakpoints.down('xs')]: {
    applicantInfoBlock: {
      flexDirection: 'column',
    },
  },
}));

const ApplicantItem = ({ applicant, deleteApplicant }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleDelete = () => {
    deleteApplicant(applicant.id);
  };

  return (
    <div className={classes.applicantItem}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        name={applicant.name}
        className={classes.checkbox}
        color="primary"
      />
      <div className={classes.applicantInfoBlock}>
        <Typography className={classes.typographyName}>
          {applicant.name}
        </Typography>
        <Typography className={classes.typography}>
          {applicant.address.address}
        </Typography>
      </div>
      <IconButton onClick={handleDelete}>
        <HighlightOffIcon />
      </IconButton>
    </div>
  );
};

ApplicantItem.propTypes = {
  applicant: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.shape({
      address: PropTypes.string,
    }),
    id: PropTypes.string,
  }).isRequired,
  deleteApplicant: PropTypes.func.isRequired,
};

export default connect(null, { deleteApplicant })(ApplicantItem);
