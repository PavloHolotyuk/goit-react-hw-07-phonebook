import { createAsyncThunk } from "@reduxjs/toolkit"; 
import { addContact, deleteContact, getContacts } from "services/API";

export const getContactsThunk = createAsyncThunk('contacts/getAllContacts', async (_, thunkAPI) => {
    try {
        const data = await getContacts();
        return data;
    }catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const data = await deleteContact(id);
        return data.id;
    }catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContactThunk = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
    try {
        const data = await addContact(contact);
        return data;
    }catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});


