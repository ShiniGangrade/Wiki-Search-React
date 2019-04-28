import axios from 'axios';

export function get(baseURL, endPoint, conf = {}) {
    let url = `${baseURL}${endPoint}`;
    return axios.get(url, { ...conf }).then(({ data }) => data);;
}