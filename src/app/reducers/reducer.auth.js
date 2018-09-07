import { Action } from '@ngrx/store'

export function authReducer(state = false, action) {
  console.log('action', action);
  console.log('state', state);
  switch (action.type) {
    case 'SIGN_IN':
      return true;
    case 'SIGN_OUT':
      return false;
    default:
      return state;
  }
}
