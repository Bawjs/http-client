import HttpResponse from "./Handlers/HttpResponse";
export default class HttpClient {
    static xhr = new XMLHttpRequest();
    /**
     * Set A specific request header
     * @param name
     * @param value
     */
    static setHeader(name, value) {
        this.xhr.setRequestHeader(name, value);
    }
    /**
     * Send a POST request
     *
     * @param url
     * @param params
     * @returns {Promise<HttpResponse>}
     */
    static post(url, params) {
        this.initialize("POST", url, params);
        return this.send();
    }
    /**
     * Send a PATCH request
     *
     * @param url
     * @param params
     * @returns {Promise<HttpResponse>}
     */
    static patch(url, params) {
        this.initialize("PATCH", url, params);
        return this.send();
    }
    /**
     * Send a PUT request
     *
     * @param url
     * @param params
     * @returns {Promise<HttpResponse>}
     */
    static put(url, params) {
        this.initialize("PUT", url, params);
        return this.send();
    }
    /**
     * Send a DELETE request
     *
     * @param url
     * @param params
     * @returns {Promise<HttpResponse>}
     */
    static delete(url, params) {
        this.initialize("DELETE", url, params);
        return this.send();
    }
    /**
     * Send a GET request
     *
     * @param url
     * @param params
     * @returns {Promise<HttpResponse>}
     */
    static get(url) {
        this.initialize("GET", url);
        return this.send();
    }
    /**
     * Send a request
     *
     * @returns {Promise<HttpResponse>}
     */
    static send() {
        return new Promise((resolve, reject) => {
            this.xhr.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(new HttpResponse(this));
                }
                else if (this.status > 299) {
                    reject(new HttpResponse(this));
                }
            };
        });
    }
    /**
     * initialize a request
     *
     * @param method
     * @param url
     * @param params
     */
    static initialize(method, url, params) {
        this.xhr.open(method, url);
        this.xhr.send(JSON.stringify(params ?? ''));
    }
}
