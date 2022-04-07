import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import checklistsReducer from '../features/checklist/checklistsSlice';

export const store = configureStore({
  reducer: {
    checklists: checklistsReducer,
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
