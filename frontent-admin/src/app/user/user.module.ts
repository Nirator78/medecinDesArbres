import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ModalUserComponent } from './components/modal-user/modal-user.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    ListUserComponent,
    ModalUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  exports: [
    ListUserComponent,
    ModalUserComponent
  ]
})
export class UserModule { }
