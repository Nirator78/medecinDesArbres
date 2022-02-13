import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {AuthService} from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl = `${environment.apiUrl}/api/`;
  headers;

  constructor(private _http: HttpClient, private _auth: AuthService) {
    // Si l'utilisateur est connecté on ajoute son token d'authentification dans les requêtes sinon on n'ajoute rien
    if(this._auth.getUserDetails() != null){
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this._auth.getToken()}`
      });
    }else{
      this.headers = {};
    }

  }

  getTypeRequest(url) {
    return this._http.get(`${this.baseUrl}${url}`, { headers: this.headers }).pipe(map(res => {
      return res;
    }));
  }

  postTypeRequest(url, payload) {
    return this._http.post(`${this.baseUrl}${url}`, payload, { headers: this.headers }).pipe(map(res => {
      return res;
    }));
  }

  putTypeRequest(url, payload) {
    return this._http.put(`${this.baseUrl}${url}`, payload, { headers: this.headers }).pipe(map(res => {
      return res;
    }));
  }

  deleteTypeRequest(url) {
    return this._http.delete(`${this.baseUrl}${url}`, { headers: this.headers }).pipe(map(res => {
      return res;
    }));
  }
}
