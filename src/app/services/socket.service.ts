import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';

import { HttpService } from './http.service';

@Injectable()
export class SocketService {
  private sent: Observable<any>;
  private socket: SocketIOClient.Socket;
  private test: Observable<any>;

  constructor(
    private http: HttpService
  ) { }

  connect(): void {
    this.socket = io.connect(this.http.getIp());
    // this.http.get('/api/offers/getAcceptedOffers')
    //   .then(response => {
    //     this.socket.emit('join', response);
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   });

    //////////////////////////////////////////////////////
    //               SOCKET EVENT HANDLERS
    //////////////////////////////////////////////////////
    this.sent = new Observable(observer => {
      this.socket.on('sent', data => {
        observer.next(data);
      });
    });

    this.test = new Observable(observer => {
      this.socket.on('testing', () => {
        observer.next();
      });
    });

    this.socket.emit('test');    
  }

  emit(event: string, data?: any) {
    console.log('emitting')
    this.socket.emit(event, data);
  }

  // getMessages(): Observable<any> {
  //   return new Observable(observer => {
  //     this.socket.on('sent', data => {
  //       observer.next(data);
  //     });
  //   });
  // }

  getSent(): Observable<any> {
    return this.sent;
  }

  getTest(): Observable<any> {
    return this.test;
  }

  logout(): void {
    if (this.socket) {
      this.socket.emit('logout');
      this.socket.close();
      this.socket = undefined;
    }
  }

}