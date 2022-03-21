import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as cryptoJS from "crypto-js";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private environment = environment;
  constructor() {
  }

  private tokenExpired(token) {
    try {
      const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
      return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }catch (err){
      return null;
    }
  }

  getUserDetails() {
    return localStorage.getItem('userData') ? localStorage.getItem('userData') : null;
  }

  setDataInLocalStorage(variableName, data) {
    localStorage.setItem(variableName, data);
  }

  getToken() {
    const token = localStorage.getItem('token')
    if (this.tokenExpired(token) === null) {
      return null;
    } else {
      return token;
    }
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

  encryptPassword(password){
    return cryptoJS.AES.encrypt(password, this.environment.cryptedKey).toString();
  }
}
