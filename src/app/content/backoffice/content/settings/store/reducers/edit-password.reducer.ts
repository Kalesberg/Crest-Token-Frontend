import {
  CHECK_USER_PASSWORD,
  CHECK_USER_PASSWORD_FAIL, CHECK_USER_PASSWORD_SUCCESS, EDIT_USER_PASSWORD
} from './../actions/edit-pasword.actions';
import { EDIT_USER_PASSWORD_FAIL, EDIT_USER_PASSWORD_SUCCESS, PasswordActions } from '../actions/edit-pasword.actions';

export interface IEditPasswordState {
  isLoading: boolean;
  isCurrentPasswordValid: boolean;
  updated: boolean;
  error: null | string;
}
export const initialState: IEditPasswordState = {
  isLoading: false,
  isCurrentPasswordValid: false,
  updated: false,
  error: null
};

export function reducer(
  state: IEditPasswordState = initialState,
  action: PasswordActions
): any {
  switch (action.type) {

    case CHECK_USER_PASSWORD: {
      return {
        ...state,
        isLoading: true
      };
    }

    case CHECK_USER_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isCurrentPasswordValid: true,
        error: null,
        updated: false,
      };
    }

    case CHECK_USER_PASSWORD_FAIL: {
      const error: string = action.payload && action.payload.error && action.payload.error.error
        ? action.payload.error.error
        : 'Something went wrong';

      return {
        ...state,
        isLoading: false,
        error
      };
    }

    case EDIT_USER_PASSWORD: {
      return {
        ...state,
        isLoading: true
      };
    }

    case EDIT_USER_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isCurrentPasswordValid: false,
        updated: true,
        error: null
      };
    }

    case EDIT_USER_PASSWORD_FAIL: {
      return {
        ...state,
        isLoading: false,
        error: 'Something went wrong.'
      };
    }

    default:
      return state;
  }
}
