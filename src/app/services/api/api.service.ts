import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import LocalStorageService from '../localstorage/localstorage.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export default class ApiService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  getCourses(search) {
    const auth = this.localStorageService.getAuth();
    return this.http.get<any>(`${environment.apiUrl}/courses/?token=${auth && auth.token}&search=${search}`);
  }

  delete(id) {
    const auth = this.localStorageService.getAuth();
    return this.http.get<any>(`${environment.apiUrl}/delete/${id}/?token=${auth && auth.token}`);
  }

  getCourse(id) {
    const auth = this.localStorageService.getAuth();
    return this.http.get<any>(`${environment.apiUrl}/courses/${id}/?token=${auth && auth.token}`);
  }

  save(payload) {
    const auth = this.localStorageService.getAuth();
    return this.http.post<any>(`${environment.apiUrl}/save/?token=${auth && auth.token}`, payload);
  }
}
