import axios from 'axios';
import { SET_APPLICANTS, ADD_APPLICANT, DELETE_APPLICANT } from './types';

export const getApplicants = (customerId) => (dispatch) => {
  axios
    .get(`https://lexberry.com.ua/api/v1/applicants`, {
      params: { 'filter[client:id]': customerId },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_APPLICANTS,
        payload: res.data.items,
      });
    })
    .catch((err) => console.log(err));
};

export const addApplicant = (applicant) => (dispatch) => {
  dispatch({
    type: ADD_APPLICANT,
    payload: applicant,
  });
};

export const deleteApplicant = (id) => (dispatch) => {
  dispatch({
    type: DELETE_APPLICANT,
    payload: id,
  });
};
