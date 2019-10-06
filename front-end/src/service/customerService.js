import axios from 'axios';

function getAllCustomers() {
    return axios.get(`${process.env.REACT_APP_REST_URL}/customer`);
}

function deleteCustomerById(id) {
    if(id)
        return axios.delete(`${process.env.REACT_APP_REST_URL}/customer/${id}`);
    else 
        return null;
}

function save(payload) {
    if(payload)
        return axios.post(`${process.env.REACT_APP_REST_URL}/customer`, payload);
    else 
        return null;
}

function getCustomerByID(id) {
    if(id)
        return axios.get(`${process.env.REACT_APP_REST_URL}/customer/${id}`);
    else 
        return null;
}

export default {
    getAllCustomers,
    deleteCustomerById,
    save,
    getCustomerByID
};