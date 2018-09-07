import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AppState } from '../../app.state';
import AuthService from '../../services/auth/auth.service';
import LocalStorageService from '../../services/localstorage/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private activatedRoute: Router,
    private localStorageService: LocalStorageService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: '1@mail.com',
      password: '123',
    });
  }

  public onSubmit() {
    this.errorMessage = '';
    const { username, password } = this.loginForm.controls;
    this.authService.login(username.value , password.value).pipe(first())
      .subscribe(
        data => {
          this.store.dispatch({ type: 'SIGN_IN' });
          this.localStorageService.setAuth(data);
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
