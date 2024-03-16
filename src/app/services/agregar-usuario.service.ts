import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgregarUsuarioService {

  private baseURL = 'http://localhost:8080/usuarios/registrar'
  constructor(private httpClient : HttpClient) { }

  upload(formData: FormData): Observable<any> {
    var object: { [key: string]: any } = {};
    formData.forEach((value, key) => object[key] = value);
    var json = JSON.stringify(object);
    var json1 = JSON.parse(json);
    const headers = { 'content-type': 'application/json'}

    console.log(json1);
    


    return this.httpClient.post(`${this.baseURL}`, json1, {'headers':headers});
  }
}
