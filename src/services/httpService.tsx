import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function setJwtHeaders(jwt: string) {
    if (jwt) axios.defaults.headers.common["Bearer"] = jwt;
}

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwtHeaders: setJwtHeaders,
};

export default httpService;