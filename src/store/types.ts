// Create types
export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const NEED_VERIFICATION = 'NEED_VERIFICATION';
export const SET_SUCCESS = 'SET_SUCCESS';

// 1. Create types for User data and user status. 1.User, 2.AuthState, 3.SignUpData and 4.SignInData
export interface User {
  firstName: string;
  email: string;
  id: string;
  createdAt: any;
}

export interface AuthState {
  user: User | null;
  authenticated: boolean;
  loading: boolean;
  error: string;
  needVerification: boolean;
  success: string;
}

export interface SignUpData {
  firstName: string;
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

// 2. Create types for User Actions. 
// 1.SetUserAction, 2.SetLoadingAction, 3.SignOutAction, 4.SetErrorAction, 5.NeedVerificationAction and 6.SetSuccessAction

interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

interface SignOutAction {
  type: typeof SIGN_OUT;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

interface NeedVerificationAction {
  type: typeof NEED_VERIFICATION;
}

interface SetSuccessAction {
  type: typeof SET_SUCCESS;
  payload: string;
}


// This feature in TypeScript is called dicreminated Union. Recommended approch for typing Reducer functions
export type AuthAction = SetUserAction | SetLoadingAction | SignOutAction | SetErrorAction | NeedVerificationAction | SetSuccessAction;

