import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/components/login/login.component";
import {LoginGuard} from "./guard/login/login.guard";
import {MenuAdminComponent} from "./menu-admin/menu-admin.component";
import {ListUserComponent} from "./user/components/list-user/list-user.component";
import {ListPasswordKeyComponent} from "./user/components/list-password-key/list-password-key.component";

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: MenuAdminComponent, canActivate:[LoginGuard] },
  { path: 'utilisateur', component: ListUserComponent, canActivate:[LoginGuard] },
  { path: 'password-key', component: ListPasswordKeyComponent, canActivate:[LoginGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
