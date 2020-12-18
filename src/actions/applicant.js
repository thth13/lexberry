import axios from 'axios';
import { SET_APPLICANTS, ADD_APPLICANT } from './types';

export const getApplicants = (customerId) => (dispatch) => {
  axios
    .get(
      `https://lexberry.com.ua/api/v1/applicants?filter[client:id]=${customerId}`
    )
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_APPLICANTS,
        payload: res.data.items,
      });
    })
    .catch((err) => console.log(err));
};
