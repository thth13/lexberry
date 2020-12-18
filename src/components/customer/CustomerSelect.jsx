import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  getDefaultCustomers,
  clearFilterCustomers,
  setCustomer,
  filterCustomers,
  removeCustomer,
} from '../../actions/customer';
import { getApplicants } from '../../actions/applicant';

const useStyles = makeStyles(() => ({
  autocomplete: {
    width: 300,
    marginBottom: 15,
  },
}));

const CustomerSelect = ({
  customers,
  getDefaultCustomers,
  clearFilterCustomers,
  setCustomer,
  filterCustomers,
  removeCustomer,
  getApplicants,
}) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState();
  const [selected, setSelected] = useState(null);

  const onChange = (e, value) => {
    setInputValue((prevState) => {
      // Сбрасываем фильтр, если длина текста в инпуте опять меньше 3
      if (
        (prevState && prevState.length >= 3 && value.length < 3) ||
        value.length < 3
      ) {
        clearFilterCustomers();
      } else if (value.length >= 3) {
        // Если длина инпута больше 3, делаем фильтр
        filterCustomers(value);
      }
      setInputValue(value);
    });
  };

  const changeCustomer = (e, customer) => {
    setSelected(customer);

    if (customer) {
      setCustomer(customer.id);
      getApplicants(customer.id);
    }
  };

  useEffect(() => {
    if (!selected) {
      removeCustomer();
    }
  }, [selected]);

  useEffect(() => {
    getDefaultCustomers();
  }, [getDefaultCustomers]);

  return (
    <Autocomplete
      className={classes.autocomplete}
      value={selected}
      onChange={changeCustomer}
      options={customers}
      getOptionLabel={(customer) => customer.label}
      inputValue={inputValue}
      onInputChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Customer Search / Selection"
          margin="normal"
        />
      )}
    />
  );
};

const mapStateToProps = (state) => ({
  customer: state.customer.customer,
  customers: state.customer.customers,
});

export default connect(mapStateToProps, {
  getDefaultCustomers,
  clearFilterCustomers,
  setCustomer,
  filterCustomers,
  removeCustomer,
  getApplicants,
})(CustomerSelect);
