import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ModalUserComponent } from './components/modal-user/modal-user.component';

@NgModule({
  declarations: [
    ListUserComponent,
    ModalUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListUserComponent,
    ModalUserComponent
  ]
})
export class UserModule { }
