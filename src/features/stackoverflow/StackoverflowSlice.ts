import { createSlice } from '@reduxjs/toolkit';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store/store'; 
import { SOUser } from '../../models/StackoverflowUser';
import { getUsers } from '../../services/stackoverflowService';

export interface SOState {
    users: SOUser[];
    loading: boolean;
    errors: string;
}

const initialState: SOState = {
    users: [],
    loading: false,
    errors: "",
}

const soSlice = createSlice({
    name: 'stackoverflow',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
    },
});

export const { setUsers, setLoading, setErrors } = soSlice.actions;

export default soSlice.reducer;

export const usersSelector = (state: {soStore: SOState}) => state.soStore;

// Actions
export const getSOUsers = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
      dispatch(setLoading(true));
      try {

        if (getState().soStore.users.length === 0) {
            const response = await getUsers();
            dispatch(setLoading(false));
            dispatch(setUsers(response?.data?.items));
        }
      } catch (e: any) {
        dispatch(setErrors(e.message));
        dispatch(setLoading(false));
      }
    }
}

export const updateSOUsers = (updatedUser: SOUser): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
      dispatch(setLoading(true));
      try {
        let users = getState().soStore.users;
        const updatedUsers = users.map((user: SOUser) => {
            if (user.display_name === updatedUser.display_name) {
                return updatedUser;
            } else {
                return user;
            }
        })
        dispatch(setLoading(false));
        dispatch(setUsers(updatedUsers));
      } catch (e: any) {
        dispatch(setErrors(e.message));
        dispatch(setLoading(false));
      }
    }
}


