import { useState } from 'react';
import { connect } from 'react-redux';
import { addApplicant } from '../../actions/applicant';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(() => ({
  formTitle: {
    opacity: '50%',
    fontWeight: 'bolder',
  },
  textField: {
    width: '48%',
    marginBottom: 10,
  },
  textFieldGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  radioGroup: {
    marginBottom: 10,
  },
  countries: {
    maxWidth: 300,
    marginBottom: 10,
  },
  addButton: {
    margin: '10px 0',
  },
}));

const countries = ['Ukraine', 'Russia', 'Germany', 'Japan'];

const AddApplicant = ({ addApplicant, setIsFormOpened }) => {
  const classes = useStyles();
  const [personType, setPersonType] = useState('individual');
  const [country, setCountry] = useState(countries[0]);
  const [fields, setFields] = useState({
    edrpou: '',
    name: '',
    address: '',
    originalName: '',
    originalAddress: '',
  });

  const handleChange = (e) => {
    setPersonType(e.target.value);
  };

  const changeCountry = (e, customer) => {
    setCountry(customer);
  };

  const changeFieldValue = (e) => {
    setFields((fields) => {
      return { ...fields, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addApplicant({
      ...fields,
      id: Date.now(),
      personType,
      address: {
        country,
        address: fields.address,
      },
    });

    setIsFormOpened(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <Typography className={classes.formTitle}>Додати нового</Typography>
      <RadioGroup
        aria-label="personType"
        name="personType"
        value={personType}
        onChange={handleChange}
        className={classes.radioGroup}
      >
        <FormControlLabel
          value="individual"
          control={<Radio />}
          label="Фiзична особа"
        />
        <FormControlLabel
          value="entity"
          control={<Radio />}
          label="Юридична особа"
        />
      </RadioGroup>
      <Autocomplete
        value={country}
        onChange={changeCountry}
        options={countries}
        className={classes.countries}
        renderInput={(params) => <TextField {...params} label="Краiна" />}
      />
      <TextField
        value={fields.edrpou}
        onChange={changeFieldValue}
        name="edrpou"
        className={classes.textField}
        label="ЭДРПОУ"
      />
      <div className={classes.textFieldGroup}>
        <TextField
          name="name"
          value={fields.name}
          onChange={changeFieldValue}
          className={classes.textField}
          label="Назва"
        />
        {country && country !== 'Ukraine' && (
          <TextField
            name="originalName"
            value={fields.originalName}
            onChange={changeFieldValue}
            className={classes.textField}
            label="Назва мовою походження"
          />
        )}
      </div>
      <div className={classes.textFieldGroup}>
        <TextField
          name="address"
          value={fields.address}
          onChange={changeFieldValue}
          className={classes.textField}
          label="Адреса"
        />
        {country && country !== 'Ukraine' && (
          <TextField
            name="originalAddress"
            value={fields.originalAddress}
            onChange={changeFieldValue}
            className={classes.textField}
            label="Адреса мовою походження"
          />
        )}
      </div>
      <Button
        type="submit"
        className={classes.addButton}
        variant="outlined"
        color="primary"
      >
        Додати
      </Button>
    </form>
  );
};

export default connect(null, { addApplicant })(AddApplicant);
