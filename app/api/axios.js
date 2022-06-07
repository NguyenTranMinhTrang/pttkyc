import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost/pttkyc"
});

instance.interceptors.response.use(
    (response) => {
        return response;
    }
);

export default instance;
