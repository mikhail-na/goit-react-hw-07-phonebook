import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//  axios.defaults.url =
//      'https://64a6851a096b3f0fcc7ff314.mockapi.io/api/phonebook';
// const URL = 'https://64a6851a096b3f0fcc7ff314.mockapi.io/api/phonebook';

// axios.create({
//   baseURL: URL,
// });

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://64a6851a096b3f0fcc7ff314.mockapi.io/api/phonebook/contacts'
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://64a6851a096b3f0fcc7ff314.mockapi.io/api/phonebook/contacts',
        newContact
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://64a6851a096b3f0fcc7ff314.mockapi.io/api/phonebook/contacts/${id}`
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);