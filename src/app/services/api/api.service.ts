import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class ApiService {

  constructor(private http: HttpClient) { }

  getCourses(search){
    const auth = JSON.parse(localStorage.getItem('auth'));
    return this.http.get<any>(`http://localhost:3000/courses/?token=${auth && auth.token}&search=${search}`)
  }

  delete(id){
    const auth = JSON.parse(localStorage.getItem('auth'));
    return this.http.get<any>(`http://localhost:3000/delete/${id}/?token=${auth && auth.token}`)
  }

  getCourse(id){
    const auth = JSON.parse(localStorage.getItem('auth'));
    return this.http.get<any>(`http://localhost:3000/courses/${id}/?token=${auth && auth.token}`)
  }

  save(payload){
    const auth = JSON.parse(localStorage.getItem('auth'));
    return this.http.post<any>(`http://localhost:3000/save/?token=${auth && auth.token}`, payload)
  }
}
