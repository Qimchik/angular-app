import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState } from '../../app.state';
import LocalStorageService from '../../services/localstorage/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  signedIn: Observable<boolean>;
  constructor(private activatedRoute: Router, private localStorageService: LocalStorageService, private store: Store<AppState>) {
    this.signedIn = store.pipe(select('auth'));
  }

  ngOnInit() {
  }

  onLogOut() {
    this.store.dispatch({ type: 'SIGN_OUT' });
    this.localStorageService.clear();
    this.activatedRoute.navigate(['login']);
  }
}
