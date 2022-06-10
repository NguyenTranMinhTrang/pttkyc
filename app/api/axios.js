import axios from "axios";

const IP = '10.40.236.75';

const instance = axios.create({
    baseURL: `http://${IP}`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json',
    }
});

instance.interceptors.response.use(
    (response) => {
        return response.data;
    }
);

export default instance;
