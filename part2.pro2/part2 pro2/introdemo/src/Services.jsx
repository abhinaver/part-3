import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

// Fetch all contacts
const getAll = () => axios.get(baseUrl).then(response => response.data);

// Add a new contact
const create = (newPerson) => axios.post(baseUrl, newPerson).then(response => response.data);

// Update an existing contact
const update = (id, updatedPerson) => axios.put(`${baseUrl}/${id}`, updatedPerson).then(response => response.data);

// Delete a contact
const remove = (id) => axios.delete(`${baseUrl}/${id}`);

export default { getAll, create, update, remove };
