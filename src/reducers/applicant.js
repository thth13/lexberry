import {
  SET_APPLICANTS,
  ADD_APPLICANT,
  DELETE_APPLICANT,
  CLEAR_APPLICANTS,
} from '../actions/types';

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
        applicants: [...state.applicants, payload],
        newApplicants: [...state.newApplicants, payload],
      };
    }
    case DELETE_APPLICANT: {
      return {
        applicants: state.applicants.filter(
          (applicant) => applicant.id !== payload
        ),
        newApplicants: state.newApplicants.filter(
          (applicant) => applicant.id !== payload
        ),
      };
    }
    case CLEAR_APPLICANTS: {
      return {
        applicants: [],
        newApplicants: [],
      };
    }
    default:
      return state;
  }
}
