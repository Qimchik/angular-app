import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './FutureModules/login/login.component';
import { ListComponent } from './FutureModules/list/list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: ListComponent },
  // { path: 'item', component: RegisterComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
