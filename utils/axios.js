import axios from "axios";

const url = '/api'

const axiosClient = axios.create({
    baseURL: url,
    timeout: 10000,
    credentials: 'include',
    withCredentials: true
});

axiosClient.interceptors.request.use(async (req) => {
    return req;
});

// export const apiAddLog = async (data) => await axiosClient.post('/log/add', data);