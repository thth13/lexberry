import { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '25px',
    padding: '10px 25px',
  },
  name: {
    fontWeight: 'bolder',
  },
  autocomplete: {
    width: 300,
  },
}));

const Customer = () => {
  const classes = useStyles();

  // Клиенты подгруженные при первой загрузке. Сохраняем их в отдельном стейте,
  // что бы не делать повторных подгрузок, когда убираем фильтр,
  // либо когда выбрали клиента и нужно подставить его данные (в фильтрованом списке не все данные есть)
  const [defaultCustomers, setDefaultCustomers] = useState();

  const [customers, setCustomers] = useState([]); // Данные в выпадающем списке в автокомплите
  const [inputValue, setInputValue] = useState(''); // Значение вводимое в автокомплит
  const [customer, setCustomer] = useState(); // Выбранный клиент
  const [value, setValue] = useState(null); // Выбранное значение в автокмоплите

  const getCustomers = (searchName) => {
    axios
      .get(`https://lexberry.com.ua/api/v1/clients`, {
        params: { 'search[name]': searchName },
      })
      .then((res) => {
        // Если элементов нет, приходит res.data.message
        // с сообщением что нет элементов. Поэтому делаем проверку что пришли items
        if (res.data.items) {
          if (!defaultCustomers) {
            setDefaultCustomers(res.data.items);
          }
          setCustomers(res.data.items);
        }
      })
      .catch((err) => console.log(err));
  };

  const onChange = (e, value) => {
    console.log(value);
    setInputValue((prevState) => {
      // Сбрасываем фильтр, если длина текста в инпуте опять меньше 3
      if (prevState && prevState.length >= 3 && value.length < 3) {
        setCustomers(defaultCustomers);
      } else if (value.length >= 3) {
        // Если длина инпута больше 3, грузим фильтр
        getCustomers(value);
      }
      setInputValue(value);
    });
  };

  // Если выбрали кастомера
  const changeCustomer = (e, customer) => {
    setValue(customer);

    if (customer) {
      setCustomer(defaultCustomers.find((item) => item.id === customer.id));
    }
  };

  // Если очищаем автокомплит, убираем кастомера
  useEffect(() => {
    if (!value) {
      setCustomer(null);
    }
  }, [value]);

  // Первая подгрузка кастомеров
  useEffect(() => {
    if (!defaultCustomers) {
      getCustomers();
    }
  }, [getCustomers, defaultCustomers]);

  return (
    <Paper className={classes.root} elevation={0}>
      <Typography variant="h5">Клієнт</Typography>
      <Autocomplete
        className={classes.autocomplete}
        value={value}
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
      {customer && (
        <>
          <Typography className={classes.name}>{customer.name}</Typography>
          <Typography>{customer.contactPerson}</Typography>
          <Typography>тел. {customer.phone}</Typography>
        </>
      )}
    </Paper>
  );
};

export default Customer;
