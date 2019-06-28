/**
 * Created by abisi on 2019-06-27
 */

class NetworkService {

    get = async (url, headers = []) => {
        console.log('Header -->');
        console.log(JSON.stringify(headers));
        let request = {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                ...headers,
            },
        };

        let response = await fetch(url, request);
        if (response.status === 200) return response.json();
        else return response;
    };

    put = async (url, data, headers) => {
        const request = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify(data),
        };

        return await fetch(url, request)
    };

    getRaw = (url, headers = []) => {
        return new Promise((resolve, reject) => {
            let request = {
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    'Accept': 'image/png',
                    'Content-Type': 'application/json',
                    ...headers,
                },
            };

            fetch(url, request)
                .then(res => {
                    console.log("getProfilePic response: ", res);
                    resolve(res);
                })
                //.then(json => (json.error ? reject(json.message) : resolve(json)))
                .catch(error => reject(error.message));
        });
    };

    postWithJsonAsResult = (url, data, headers = []) => {
        //console.log('data -->', JSON.stringify(data));
        return new Promise((resolve, reject) => {
            let request = {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    ...headers,
                },
                body: JSON.stringify(data),
            };

            return fetch(url, request)
                .then(res => res.json())
                .then(json => (json.error ? reject(json.message) : resolve(json)))
                .catch(error => reject(error.message));
        });
    };

    post = async (url, data, headers = []) => {
        //console.log('data -->', JSON.stringify(data));
        let request = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify(data),
        };

        console.log("request: ", request);

        return await fetch(url, request)
    };
}

export const networkService = new NetworkService();
