import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListConferenceComponent } from './components/list-conference/list-conference.component';
import { ModalConferenceComponent } from './components/modal-conference/modal-conference.component';



@NgModule({
  declarations: [
    ListConferenceComponent,
    ModalConferenceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConferenceModule { }
