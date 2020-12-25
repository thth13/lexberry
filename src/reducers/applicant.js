import {
  SET_APPLICANTS,
  ADD_APPLICANT,
  DELETE_APPLICANT,
  CLEAR_APPLICANTS,
  SET_APPLICANTS_ISLOADING,
} from '../actions/types';

const initialState = {
  applicants: [],
  newApplicants: [],
  applicantsIsLoading: false,
};

export default function applicant(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_APPLICANTS:
      return {
        ...state,
        applicants: payload,
        applicantsIsLoading: false,
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
    case SET_APPLICANTS_ISLOADING: {
      return {
        ...state,
        applicantsIsLoading: true,
      };
    }
    default:
      return state;
  }
}
