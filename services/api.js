import Router from 'next/router';

export default class API {

    static async fetch(method, endpoint, data = null, headers = {}) {
        headers['Accept'] = 'application/json'
        headers['Content-Type'] = 'application/json';
        var url = process.env.NEXT_PUBLIC_API_BASE_URL + endpoint;

        var apiResponse = {
            isSuccess: false,
            response: null,
            data: null,
            errorText: null
        }
        try {
            apiResponse.response = await fetch(url, {
                method: method,
                headers: headers,
                body: data && JSON.stringify(data)
            })
            if (apiResponse.response.ok) apiResponse.isSuccess = true;
            apiResponse.data = await apiResponse.response.json();
            if (apiResponse.data?.error !== undefined) apiResponse.errorText = apiResponse.data.error.message;
            else apiResponse.errorText = response.statusText;
        }
        catch (e) {
            apiResponse.errorText = 'The connection to the server has failed, please try again.'
        }

        return apiResponse;
    }
}
