import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  deleteContactThunk,
  addContactThunk,
} from '../service/thunks';

const initialContactsState = { items: [], isLoading: false, error: null };

const handlePending = (state, { payload }) => {
  state.isLoading = true;
};

const handleFulfilledFetch = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = '';
};

const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
  state.error = '';
};

const handleFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(e => e.id !== payload.id);
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const arrayOfThunks = [
  fetchContactsThunk,
  deleteContactThunk,
  addContactThunk,
];

const normalizedFunktion = type => arrayOfThunks.map(e => e[type]);

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: builder => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(fetchContactsThunk.fulfilled, handleFulfilledFetch)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...normalizedFunktion(PENDING)), handlePending)
      .addMatcher(isAnyOf(...normalizedFunktion(REJECTED)), handleRejected);
  },
});
// Action creators are generated for each case reducer function
export const contactsReducer = contactsSlice.reducer;
