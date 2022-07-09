import HttpResponse from "./Handlers/HttpResponse";
export default class HttpClient {
    private static xhr;
    /**
     * Set A specific request header
     * @param name
     * @param value
     */
    static setHeader(name: string, value: string): void;
    /**
     * Send a POST request
     *
     * @param url
     * @param params
     * @returns {Promise<HttpResponse>}
     */
    static post<T = any>(url: string, params?: object): Promise<HttpResponse<T>>;
    /**
     * Send a PATCH request
     *
     * @param url
     * @param params
     * @returns {Promise<HttpResponse>}
     */
    static patch<T = any>(url: string, params?: object): Promise<HttpResponse<T>>;
    /**
     * Send a PUT request
     *
     * @param url
     * @param params
     * @returns {Promise<HttpResponse>}
     */
    static put<T = any>(url: string, params?: object): Promise<HttpResponse<T>>;
    /**
     * Send a DELETE request
     *
     * @param url
     * @param params
     * @returns {Promise<HttpResponse>}
     */
    static delete<T = any>(url: string, params?: object): Promise<HttpResponse<T>>;
    /**
     * Send a GET request
     *
     * @param url
     * @param params
     * @returns {Promise<HttpResponse>}
     */
    static get<T = any>(url: string): Promise<HttpResponse<T>>;
    /**
     * Send a request
     *
     * @returns {Promise<HttpResponse>}
     */
    private static send;
    /**
     * initialize a request
     *
     * @param method
     * @param url
     * @param params
     */
    private static initialize;
}
