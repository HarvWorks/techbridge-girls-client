import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { HttpService } from './http.service';

@Injectable()
export class SuppliersService {
  constructor(
    private http: HttpService
  ) { }

  login(data: any): Promise<any> {
    return this.http.post('/suppliers/login', data);
  }

  register(data: any): Promise<any> {
    return this.http.post('/suppliers/register', data);
  }

  show(id: string): Promise<any> {
    return this.http.get(`/api/suppliers/${id}`);
  }

}