import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export default class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/login/`, { username: username, password: password });
  }
}
