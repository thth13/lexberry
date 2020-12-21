import { CREATE_APPLICATION } from '../actions/types';

const initialState = null;

export default function application(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_APPLICATION: {
      return payload;
    }
    default:
      return state;
  }
}
