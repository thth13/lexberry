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
  checkbox: {
    paddingLeft: 0,
  },
  applicantItem: {
    display: 'flex',
    alignItems: 'center',
  },
  [theme.breakpoints.down('xs')]: {
    applicantItem: {
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
      <Typography className={classes.typography}>{applicant.name}</Typography>
      <Typography className={classes.typography}>
        {applicant.address.address}
      </Typography>
      <IconButton onClick={handleDelete}>
        <HighlightOffIcon />
      </IconButton>
    </div>
  );
};

export default connect(null, { deleteApplicant })(ApplicantItem);
