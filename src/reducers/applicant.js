import { SET_APPLICANTS, ADD_APPLICANT } from '../actions/types';

const initialState = {
  applicants: [],
  newApplicants: [],
};

export default function applicant(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_APPLICANTS:
      return {
        ...state,
        applicants: payload,
      };
    case ADD_APPLICANT: {
      return {
        applicant: [...state.applicants, payload],
        newApplicants: [...state.newApplicants, payload],
      };
    }
    default:
      return state;
  }
}
