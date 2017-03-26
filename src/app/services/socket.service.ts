import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';

import { HttpService } from './http.service';

@Injectable()
export class SocketService {
  private onSent: Observable<any>;
  private socket: SocketIOClient.Socket;

  constructor(
    private http: HttpService
  ) { }

  connect(type: number, id: string): void {
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
    this.socket.on('accepted', data => {
      if (type === 1 && id === data.supplier_id)
        this.socket.emit('join', [data.proposal_id]);  
    });

    this.onSent = new Observable(observer => {
      this.socket.on('sent', data => {
        observer.next(data);
      });
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.emit('disconnect');
      this.socket.disconnect();
      this.socket = undefined;
    }
  }

  emit(event: string, data?: any) {
    this.socket.emit(event, data);
  }

  getOnSent(): Observable<any> {
    return this.onSent;
  }

}