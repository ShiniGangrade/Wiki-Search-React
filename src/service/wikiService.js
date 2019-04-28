import { get } from '../utils/RequestHandler';

const baseURL = 'https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&format=json&formatversion=2&namespace=0&limit=10';


export function getAutoSuggestResult(query) {
    return get(baseURL, `&suggest=true&search=${query}`);
}

export function getSearchResults(query) {
    return get(baseURL, `&search=${query}`);
}