export default class HttpResponse<T = any> {
    status: number;
    response: T;
    request: XMLHttpRequest;
    constructor(req: XMLHttpRequest);
    getHeader(name: string): string | null;
}
