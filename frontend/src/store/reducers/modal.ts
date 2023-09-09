import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
  shown: boolean
}

const initialState: ModalState = {
  shown: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state) => {
      state.shown = true;
    },
    hide: (state) => {
      state.shown = false;
    },
  },
})

export const { show, hide } = modalSlice.actions

export default modalSlice.reducer