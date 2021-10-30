import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedMail: null,
  sendMessageIsOpen: false,
}

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false
    },

    setSelectedMail: (state, action) => {
      state.selectedMail = action.payload
    },
  },
})

export const { openSendMessage, closeSendMessage, setSelectedMail } =
  mailSlice.actions

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen
export const selectSelectedMail = (state) => state.mail.selectedMail

export default mailSlice.reducer
