import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { first } from 'rxjs/operators';

import ApiService from '../../services/api/api.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ ApiService ]
})
export class DetailComponent implements OnInit {
  id: string;
  course: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private snackBar: MatSnackBar,
  ) {}


  ngOnInit() {
    this.course = this.formBuilder.group({
      id: '' + Math.round(Math.random()*1000),
      name: '',
      time: '',
      descrition: '',
      date: '',
    });
    this.activatedRoute.params.subscribe(params => {
       this.id = params['id'];
       if (this.id) {
         this.apiService.getCourse(this.id).pipe(first())
           .subscribe(
             data => {
               this.course.setValue(data);
             },
             error => {
               if (error.status === 401) {
                 this.route.navigate(['login']);
               }
             }
           );
       }
    });
  }
  onSubmit() {
    this.apiService.save(this.course.value).pipe(first())
      .subscribe(
        data => {
          this.snackBar.open('Course saved successful', '', {
            duration: 5000,
          });
          this.route.navigate(['courses']);
        },
        error => {
          if (error.status === 401) {
            this.route.navigate(['login']);
          } else {
            this.snackBar.open('Failed while course was saving', '', {
              duration: 5000,
            });
          }
        }
      );
  }
  onCancle() {
    this.route.navigate(['courses']);
  }
}
