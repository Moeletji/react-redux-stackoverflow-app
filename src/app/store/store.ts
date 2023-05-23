import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import StackoverflowSlice from '../../features/stackoverflow/StackoverflowSlice';

export const store = configureStore({
  reducer: {
    soStore: StackoverflowSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
