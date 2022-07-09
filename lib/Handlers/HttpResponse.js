export default class HttpResponse {
    status;
    response;
    request;
    constructor(req) {
        this.status = req.status;
        try {
            this.response = JSON.parse(req.responseText);
        }
        catch (e) {
            this.response = req.response;
        }
        this.request = req;
    }
    getHeader(name) {
        return this.request.getResponseHeader(name);
    }
}
