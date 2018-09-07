import { Action } from '@ngrx/store'

export function authReducer(state = false, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return true;
    case 'SIGN_OUT':
      return false;
    default:
      return state;
  }
}
