import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
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
  displayedColumns: string[] = ['name', 'time', 'descrition', 'date', 'actions'];
  constructor(private apiService: ApiService, private activatedRoute: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getCourses('');
  }

  getCourses(search) {
    this.apiService.getCourses(search).pipe(first())
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

  public delete(id) {
    this.apiService.delete(id).pipe(first())
      .subscribe(
        data => {
          this.snackBar.open('Course deleted successful', '', {
            duration: 5000,
          });
          this.getCourses('');
        },
        error => {
          if (error.status === 401) {
            this.activatedRoute.navigate(['login']);
          } else {
            this.snackBar.open('Failed while course was deleting', '', {
              duration: 5000,
            });
          }
        }
      );
  }

  public edit(id) {
    this.activatedRoute.navigate(['courses', id]);
  }

  public new() {
    this.activatedRoute.navigate(['courses', 'new']);
  }
}
