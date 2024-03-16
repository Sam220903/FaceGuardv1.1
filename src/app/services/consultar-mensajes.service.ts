import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsultarMensajesService {

  constructor(private httpClient : HttpClient) { }

  private baseURL = 'https://access-control-api-odv7.onrender.com/mensajes'

  getMensajes(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURL}`);
  }
}
