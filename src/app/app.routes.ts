import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';


import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'details/:id', component: EditUserComponent, resolve:{data : EditUserResolver} },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
];
