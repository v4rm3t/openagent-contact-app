// API CONFIG (can be setup in .env file)
const API_URL='http://localhost'
const API_PORT=5000

const apiConfig = {
    baseURL: `${API_URL}:${API_PORT}/contacts`,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    },
};

// API Endpoints
const GET_CONTACT = `${apiConfig.baseURL}/`;
const CREATE_CONTACT = `${apiConfig.baseURL}/create`;
const VERIFY_CONTACT = `${apiConfig.baseURL}/verify`;
const DELETE_CONTACT = `${apiConfig.baseURL}/delete`;

export {
    GET_CONTACT,
    CREATE_CONTACT,
    VERIFY_CONTACT,
    DELETE_CONTACT
};