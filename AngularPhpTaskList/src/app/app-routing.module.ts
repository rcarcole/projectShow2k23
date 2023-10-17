import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalTaskComponent } from './modal-task/modal-task.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'home', component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'task', component: ModalTaskComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'user', component: UserComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'page404', component: Page404Component },
  { path: '**', redirectTo: 'page404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
