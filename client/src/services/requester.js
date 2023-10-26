import { appId, restApiKey } from '../utils/constants';

const request = async (method, url, data) => {

    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': appId,
            'X-Parse-REST-API-Key': restApiKey
        }
    };

    if (data !== undefined) {
        options.headers = {
            ...options.headers,
            'content-type': 'application/json'
        };

        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
    
        if (response.status === 204) {
            return response;
        }

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || result.error);
        }

        return result;
    } catch (err) {
        throw err;
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');