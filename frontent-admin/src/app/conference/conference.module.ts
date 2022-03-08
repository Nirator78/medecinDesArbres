import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListConferenceComponent } from './components/list-conference/list-conference.component';
import { ModalConferenceComponent } from './components/modal-conference/modal-conference.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    ListConferenceComponent,
    ModalConferenceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    NgSelectModule
  ],
  exports: [
    ListConferenceComponent,
    ModalConferenceComponent
  ],
})
export class ConferenceModule { }
