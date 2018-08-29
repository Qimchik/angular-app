import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import AuthService from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private activatedRoute: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: '12',
      password: '',
    });
  }

  public onSubmit() {
    this.errorMessage = '';
    const { username, password } = this.loginForm.controls;
    this.authService.login(username.value , password.value).pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('auth', JSON.stringify(data));
          this.activatedRoute.navigate(['courses']);
        },
        error => {
          if (error.status === 401) {
            this.errorMessage = 'Invalid credantial';
          } else {
            this.errorMessage = 'Something went wrong';
          }
        }
      );
  }
}
