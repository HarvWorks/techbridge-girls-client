import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}

	login(data: any): Promise<any> {
		return this.http.post('http://10.238.232.143:8002/users/login',
    JSON.stringify(data), { headers: this.headers })
		.toPromise()
		.then(response => response.json())
		.catch(error => this.handleError(error.json()));
	}
}