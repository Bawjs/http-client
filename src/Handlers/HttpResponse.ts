export default class HttpResponse<T = any> {
	status: number
	response!: T
    request: XMLHttpRequest
	constructor(req: XMLHttpRequest) {
		this.status = req.status
        try {
        this.response = JSON.parse(req.responseText)
        } catch (e) {
            this.response = req.response
        }
        this.request = req
    }

    getHeader(name: string): string | null {
        return this.request.getResponseHeader(name)
    }
}
