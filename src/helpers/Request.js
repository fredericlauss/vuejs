export default class Request {
    static async get(url, options = OPTIONS) {
        try {
            const res = await fetch(BASE_URL + url, {
                ...OPTIONS,
                ...options
            });
            
            const data = res.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

const OPTIONS = {
    "Content-Type": "application/json"
}

const BASE_URL = 'https://fakestoreapi.com';