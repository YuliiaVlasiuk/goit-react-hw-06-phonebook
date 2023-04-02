import { createSlice } from '@reduxjs/toolkit';

const listContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: listContacts,
    filter: '',
  },
  reducers: {
    addContact(state, newContact) {
      state.items.push(newContact.payload);
    },

    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },

    checkFilter(state, { payload }) {
      state.filter = payload;
    },


  },
});

export const { addContact, deleteContact, checkFilter  } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
