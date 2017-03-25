import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { HttpService } from './http.service';

@Injectable()
export class MakersService {
  constructor(
    private http: HttpService
  ) { }

  login(data: any): Promise<any> {
    return this.http.post('/makers/login', data);
  }

  register(data: any): Promise<any> {
    return this.http.post('/makers/register', data);
  }

  show(id: string): Promise<any> {
    return this.http.get(`/api/makers/${id}`)
  }

}