import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Core/user';

@Injectable({
  providedIn: 'root'
})
export class ConsultarUsuariosService {
  private baseURL = 'https://access-control-api-odv7.onrender.com/usuarios'
  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }
}
