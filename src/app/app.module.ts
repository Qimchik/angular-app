import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './SharedModules/shared.module';
import { mainReducer } from './reducers/reducer.main';
import { authReducer } from './reducers/reducer.auth';

import { LoginComponent } from './FutureModules/login/login.component';
import { ListComponent } from './FutureModules/list/list.component';
import { DetailComponent } from './FutureModules/detail/detail.component';

import AuthService from './services/auth/auth.service';
import LocalStorageService from './services/localstorage/localstorage.service';
import ApiService from './services/api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ courses: mainReducer, auth: authReducer }),
  ],
  providers: [AuthService, ApiService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
