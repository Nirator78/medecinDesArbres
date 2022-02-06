import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthModule} from "./auth/auth/auth.module";
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import {UserModule} from "./user/user.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuAdminComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
