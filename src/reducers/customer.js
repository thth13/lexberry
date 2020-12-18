import {
  SET_DEFAULT_CUSTOMERS,
  FILTER_CUSTOMERS,
  CLEAR_CUSTOMER,
  CLEAR_FILTER_CUSTOMERS,
  SET_CUSTOMER,
} from '../actions/types';

const initialState = {
  defaultCustomers: [],
  customers: [],
  customer: null,
};

export default function customer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_DEFAULT_CUSTOMERS:
      return {
        ...state,
        defaultCustomers: payload,
        customers: payload,
      };
    case FILTER_CUSTOMERS:
      return {
        ...state,
        customers: payload,
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
    default:
      return state;
  }
}
