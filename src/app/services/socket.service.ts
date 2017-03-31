import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';

import { HttpService } from './http.service';

@Injectable()
export class SocketService {
  private _onSent: Observable<any>;
  private socket: SocketIOClient.Socket;

  constructor(
    private http: HttpService
  ) { }

  get onSent(): Observable<any> { return this._onSent }

  connect(type: number, id: string): void {
    this.socket = io.connect(this.http.ip);
    this.http.get('/api/offers/get-accepted-offers')
      .then(response => {
        this.socket.emit('join', response);
      })
      .catch(error => {
        console.log(error)
      });

    //////////////////////////////////////////////////////
    //               SOCKET EVENT HANDLERS
    //////////////////////////////////////////////////////
    this.socket.on('accepted', data => {
      if (type === 1 && id === data.supplier_id)
        this.socket.emit('join', [data.proposal_id]);
    });

    this._onSent = new Observable(observer => {
      this.socket.on('sent', data => {
        observer.next(data);
      });
    });
  }

  disconnect(): void {
    this._onSent = null;

    if (this.socket) {
      this.socket.emit('disconnect');
      this.socket.disconnect();
      this.socket = null;
    }
  }

  emit(event: string, data?: any) {
    this.socket.emit(event, data);
  }

}