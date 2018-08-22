import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class ApiService {

  constructor(private http: HttpClient) { }

  getCourses(){
    const auth = JSON.parse(localStorage.getItem('auth'));
    return this.http.get<any>(`http://localhost:3000/courses/?token=${auth && auth.token}`)
  }
}
