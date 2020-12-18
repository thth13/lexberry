import { combineReducers } from 'redux';
import customer from './customer';
import applicant from './applicant';

export default combineReducers({
  customer,
  applicant,
});
