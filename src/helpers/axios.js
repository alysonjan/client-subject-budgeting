import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVER_URL;

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token') 
    }
});

export default axiosInstance;