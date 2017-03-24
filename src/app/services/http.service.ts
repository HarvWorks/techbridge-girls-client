import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class HttpService {
  private ip = 'http://10.230.194.56:8000';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private handleError(error: any): Promise<any> {
    try {
      return Promise.reject(error.json().message);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  private handleResponse(response: any): Promise<any> {
    try {
      return Promise.resolve(response.json());
    } catch (error) {
      return Promise.resolve(response);
    }
  }

  constructor(
    private authHttp: AuthHttp,
    private http: Http
  ) { }

  delete(useAuth: boolean, url: string): Promise<any> {
    const http = useAuth ? this.authHttp : this.http;
    return http.delete(`${this.ip}${url}`)
      .toPromise()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

  get(useAuth: boolean, url: string): Promise<any> {
    const http = useAuth ? this.authHttp : this.http;
    return http.get(`${this.ip}${url}`)
      .toPromise()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

  post(useAuth: boolean, url: string, data: any): Promise<any> {
    const http = useAuth ? this.authHttp : this.http;
    return http.post(`${this.ip}${url}`, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

  put(useAuth: boolean, url: string, data: any): Promise<any> {
    const http = useAuth ? this.authHttp : this.http;
    return http.put(`${this.ip}${url}`, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

}
