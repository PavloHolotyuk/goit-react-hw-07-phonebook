import { createSlice } from "@reduxjs/toolkit"
import { addContactThunk, deleteContactThunk, getContactsThunk } from "redux/thunks/contactsThunk"
// import { persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage"

export const getContacts = (state) => state.contacts.contacts

const initialState = { 
	error: null,
	isLoading: false,
	contacts: [], // because we get contacts from back-end in this case
}

const contactsSlice = createSlice({
	name: "contacts",
	initialState: initialState,
	// reducers: {
	// 	addContact(state, action) {
	// 		state.contacts.push(action.payload)
	// 	},
	// 	// removeContact(state, action) {
	// 	// 	state.contacts = state.contacts.filter(
	// 	// 		(contact) => contact.id !== action.payload
	// 	// )},
	// },

	extraReducers: builder => {
		builder.addCase(getContactsThunk.pending, (state, action) => {
			state.isLoading = true;
		}).addCase(getContactsThunk.fulfilled, (state, action) => {
			state.isLoading = false;
			state.error = null;
			state.contacts = action.payload;
		}).addCase(getContactsThunk.rejected, (state, action) => {
			state.contacts = []; // we can don't use it
			state.isLoading = false;
			state.error = action.payload;
		})

		.addCase(deleteContactThunk.pending, (state, action) => {
			state.isLoading = true;
		}).addCase(deleteContactThunk.fulfilled, (state, action) => {
			state.isLoading = false;
			state.error = null;
			state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
		}).addCase(deleteContactThunk.rejected, (state, action) => {
			state.contacts = []; // we can don't use it
			state.isLoading = false;
			state.error = action.payload;
		})

		.addCase(addContactThunk.pending, (state, action) => {
			state.isLoading = true;
		}).addCase(addContactThunk.fulfilled, (state, action) => {
			state.isLoading = false;
			state.error = null;
			state.contacts.push(action.payload);  // or state.contacts = state.contacts = [action.payload, ...state.contacts];
		}).addCase(addContactThunk.rejected, (state, action) => {
			state.contacts = []; // we can don't use it
			state.isLoading = false;
			state.error = action.payload;
		})
	},
})

// const persistConfig = {
// 	key: "contacts",
// 	storage,
// }
// const contactsReducer = contactsSlice.reducer
export const contactsReducer = contactsSlice.reducer
export const { addContact, removeContact } = contactsSlice.actions
// export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer)