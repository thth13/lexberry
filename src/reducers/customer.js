import {
  SET_DEFAULT_CUSTOMERS,
  FILTER_CUSTOMERS,
  CLEAR_CUSTOMER,
  CLEAR_FILTER_CUSTOMERS,
  SET_CUSTOMER,
  SET_CUSTOMERS_ISLOADING,
} from '../actions/types';

const initialState = {
  defaultCustomers: [],
  customers: [],
  customer: null,
  customersIsLoading: false,
};

export default function customer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_DEFAULT_CUSTOMERS:
      return {
        ...state,
        defaultCustomers: payload,
        customers: payload,
        customersIsLoading: false,
      };
    case FILTER_CUSTOMERS:
      return {
        ...state,
        customers: payload,
        customersIsLoading: false,
      };
    case CLEAR_FILTER_CUSTOMERS:
      return {
        ...state,
        customers: state.defaultCustomers,
      };
    case SET_CUSTOMER:
      return {
        ...state,
        customer: state.defaultCustomers.find((item) => item.id === payload),
      };
    case CLEAR_CUSTOMER:
      return {
        ...state,
        customer: null,
      };
    case SET_CUSTOMERS_ISLOADING: {
      return {
        ...state,
        customersIsLoading: true,
      };
    }
    default:
      return state;
  }
}
