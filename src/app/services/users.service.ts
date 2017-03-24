import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { HttpService } from './http.service';

@Injectable()
export class UsersService {
	constructor(
		private http: HttpService
	) { }

	login(data: any): Promise<any> {
		return this.http.post(false, '/users/login', data);
	}

	register(data: any): Promise<any> {
		return this.http.post(false, '/users/register', data);
	}

	show(id: string): Promise<any> {
		return this.http.get(true, `/api/users/${id}`)
	}

}