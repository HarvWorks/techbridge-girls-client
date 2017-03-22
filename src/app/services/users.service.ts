import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Cookie } from 'ng2-cookies';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {
	private headers = new Headers({ 'Content-Type': 'application/json' });

	private handleResponse(response: any): Promise<any> {
		try {
			return Promise.resolve(response.json());
		} catch (error) {
			return Promise.resolve(response);
		}
	}

	private handleError(error: any): Promise<any> {
		try {
			return Promise.reject(error.json().message);
		} catch (error) {
			return Promise.reject(error);
		}
	}

	constructor(
		private http: Http
	) { }

	login(data: any): Promise<any> {
		return this.http.post('http://10.238.232.143:8002/users/login',
			JSON.stringify(data), {headers: this.headers})
			.toPromise()
			.then(response => {
				console.log(response)
				return this.handleResponse(response);
			})
			.catch(error => {
				return this.handleError(error);
			});
	}
	
}