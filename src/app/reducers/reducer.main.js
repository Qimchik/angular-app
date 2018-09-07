import { Action } from '@ngrx/store'

export function mainReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_COURSES_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}
