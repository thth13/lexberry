import { combineReducers } from 'redux';
import customer from './customer';
import applicant from './applicant';
import application from './application';

export default combineReducers({
  customer,
  applicant,
  application,
});
