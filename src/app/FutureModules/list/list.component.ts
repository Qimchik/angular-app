import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import ApiService from '../../services/api/api.service';

export interface dataColumns {
  name: string;
  time: string;
  descrition: string;
  date: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ ApiService ]
})
export class ListComponent implements OnInit {
  courses: dataColumns[];
  displayedColumns: string[] = ['name', 'time', 'descrition', 'date'];
  constructor(private apiService: ApiService, private activatedRoute: Router) {
  }

  ngOnInit() {
    this.apiService.getCourses().pipe(first())
      .subscribe(
        data => {
          this.courses = data;
        },
        error => {
          if (error.status === 401) {
            this.activatedRoute.navigate(['login']);
          }
        }
      );
  }
}
