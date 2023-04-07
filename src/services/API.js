import axios from 'axios';

const contactsApi = axios.create({
    baseURL : 'https://63d275db06556a0fdd3cc5b4.mockapi.io/contacts/',
})

export const getContacts = async () => {
    const {data} = await contactsApi.get();
    return data;
};

export const deleteContact = async (id) => {
    const {data} = await contactsApi.delete(id);
    return data;
};

export const addContact = async (contact) => {
    const {data} = await contactsApi.post('', contact);
    return data;
};

