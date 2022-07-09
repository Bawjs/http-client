import HttpResponse from "./Handlers/HttpResponse";

export default class HttpClient {
    private static xhr = new XMLHttpRequest();

    /**
     * Set A specific request header
     * @param name 
     * @param value 
     */
    static setHeader(name: string, value: string): void {
        this.xhr.setRequestHeader(name, value);
    }

    /**
     * Send a POST request
     * 
     * @param url 
     * @param params 
     * @returns {Promise<HttpResponse>}
     */
    static post<T = any>(url: string, params?: object) {
        this.initialize("POST", url, params);
        return this.send<T>()
    }

    /**
     * Send a PATCH request
     * 
     * @param url 
     * @param params 
     * @returns {Promise<HttpResponse>}
     */
    static patch<T = any>(url: string, params?: object) {
        this.initialize("PATCH", url, params);
        return this.send<T>()
    }

    /**
     * Send a PUT request
     * 
     * @param url 
     * @param params 
     * @returns {Promise<HttpResponse>}
     */
    static put<T = any>(url: string, params?: object) {
        this.initialize("PUT", url, params);
        return this.send<T>()
    }

    /**
     * Send a DELETE request
     * 
     * @param url 
     * @param params 
     * @returns {Promise<HttpResponse>}
     */
    static delete<T = any>(url: string, params?: object) {
        this.initialize("DELETE", url, params);
        return this.send<T>()
    }

    /**
     * Send a GET request
     * 
     * @param url 
     * @param params 
     * @returns {Promise<HttpResponse>}
     */
    static get<T = any>(url: string) {
        this.initialize("GET", url);
        return this.send<T>()
    }

    /**
     * Send a request
     * 
     * @returns {Promise<HttpResponse>}
     */
    private static send<T = any>() {
        return new Promise<HttpResponse<T>>((resolve, reject) => { 
            this.xhr.onreadystatechange = function (this: XMLHttpRequest) {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(new HttpResponse(this))
                } else if (this.status > 299) {
                    reject(new HttpResponse(this))
                }
            }
        })
    }

    /**
     * initialize a request
     * 
     * @param method 
     * @param url 
     * @param params 
     */
    private static initialize(method: string, url: string, params?: object) {
        this.xhr.open(method, url);
        this.xhr.send(JSON.stringify(params ?? ''));
    }
}