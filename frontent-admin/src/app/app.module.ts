import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from "./auth/auth/auth.module";
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserModule } from "./user/user.module";
import { HttpClientModule } from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ArticleModule} from "./article/article.module";
import { ConfirmationDialogComponent } from './ui/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './ui/confirmation-dialog/confirmation-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuAdminComponent,
    NavbarComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    UserModule,
    FontAwesomeModule,
    ArticleModule
  ],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
