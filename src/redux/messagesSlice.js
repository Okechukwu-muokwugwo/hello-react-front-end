/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk
export const getMessages = createAsyncThunk('messages/getMessages', async () => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/messages')
    .then((resp) => resp.json()).then((response) => response)
    .catch((error) => error);
  return response;
});

// Define the slice
const messagesSlice = createSlice({
  name: 'messages',
  initialState: { text: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.fulfilled, (state, action) => {
        state.text = action.payload.message;
      });
  },
});

export default messagesSlice.reducer;
