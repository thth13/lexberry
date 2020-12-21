import axios from 'axios';
import {
  SET_DEFAULT_CUSTOMERS,
  FILTER_CUSTOMERS,
  CLEAR_CUSTOMER,
  CLEAR_FILTER,
  SET_CUSTOMER,
  CLEAR_APPLICANTS,
} from './types';

export const getDefaultCustomers = () => (dispatch) => {
  axios
    .get('https://lexberry.com.ua/api/v1/clients')
    .then((res) => {
      // Если элементов нет, приходит res.data.message
      // с сообщением что нет элементов. Поэтому делаем проверку что пришли items
      if (res.data.items) {
        dispatch({
          type: SET_DEFAULT_CUSTOMERS,
          payload: res.data.items,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const filterCustomers = (searchName) => (dispatch) => {
  axios
    .get(`https://lexberry.com.ua/api/v1/clients`, {
      params: { 'search[name]': searchName },
    })
    .then((res) => {
      if (res.data.items) {
        dispatch({
          type: FILTER_CUSTOMERS,
          payload: res.data.items,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const clearFilterCustomers = () => (dispatch) => {
  dispatch({
    type: CLEAR_FILTER,
  });
};

export const setCustomer = (id) => (dispatch) => {
  dispatch({
    type: SET_CUSTOMER,
    payload: id,
  });
};

export const removeCustomer = () => (dispatch) => {
  dispatch({
    type: CLEAR_CUSTOMER,
  });

  dispatch({
    type: CLEAR_APPLICANTS,
  });
};
