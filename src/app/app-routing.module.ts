import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './FutureModules/login/login.component';
import { ListComponent } from './FutureModules/list/list.component';
import { DetailComponent } from './FutureModules/detail/detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'courses',
    children: [
      {path: '', component: ListComponent},
      {path: 'new', component: DetailComponent},
      {path: ':id', component: DetailComponent},
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
