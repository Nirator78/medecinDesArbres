import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor() {
  }

  getUserDetails() {
    return localStorage.getItem('userData') ? localStorage.getItem('userData') : null;
  }

  setDataInLocalStorage(variableName, data) {
    localStorage.setItem(variableName, data);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  clearStorage() {
    localStorage.clear();
  }

  isLogging() {
    // Si l'utilisateur est connecté en return true sinon false
    if (this.getUserDetails() != null && this.getToken() != null) {
      return true;
    }else{
      return false;
    }
  }

}
