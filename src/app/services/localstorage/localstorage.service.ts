import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class LocalStorageService {

  constructor() { }

  getAuth() {
    return JSON.parse(localStorage.getItem('auth'));
  }

  setAuth(data) {
    localStorage.setItem('auth', JSON.stringify(data));
  }

  clear() {
    localStorage.clear();
  }
}
