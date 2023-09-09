import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './reducers/modal'
import usersSlice  from './reducers/users'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    users: usersSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch