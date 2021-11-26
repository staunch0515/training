import { AjaxStatus } from "./AjaxStatus";

class HTTPClient
{
	_baseURL: string;

	constructor(baseURL: string)
	{
		this._baseURL = baseURL;
	}

	get(path: string): [Promise<any>, AbortController]
	{
		const startTime = new Date().getTime();
		const abortController = new AbortController();
		const response = fetch(this._baseURL + path, {
			signal: abortController.signal
		}).finally(() =>
		{
			console.info(`Latency for GET ${path} is ${new Date().getTime() - startTime} ms`);
		})
		return [response.then(getJSONData), abortController];
	}

	async delete(relativePath: string)
	{
		const startTime = new Date().getTime();
		let url = this._baseURL + relativePath;
		const response = await fetch(url, { method: "DELETE" }).finally(() =>
		{
			console.info(`Latency for DELETE ${url} is ${new Date().getTime() - startTime} ms`);
		})
		return getJSONData(response);
	}

	async postJSON<T>(relativePath: string, parameters?: object): Promise<T>
	{
		const startTime = new Date().getTime();
		let url = this._baseURL + relativePath;
		const response = await fetch(url, {
			method: "POST", headers: {
				'Content-Type': 'application/json'
			}, body: JSON.stringify(parameters)
		}).finally(() =>
		{
			console.info(`Latency for DELETE ${url} is ${new Date().getTime() - startTime} ms`);
		})
		return getJSONData(response);
	}

}

function getJSONData(response: Response)
{
	if (response.status === 500)
		throw AjaxStatus.failed500;
	if (response.status === 403)
		throw AjaxStatus.failed403;
	if (response.status === 404)
		throw AjaxStatus.failed404;
	if (response.status !== 200)
		throw AjaxStatus.failed;
	return response.json();
}

export default new HTTPClient("/api/");