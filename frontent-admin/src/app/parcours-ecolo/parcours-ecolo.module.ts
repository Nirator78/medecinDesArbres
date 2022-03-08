import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ListParcoursEcoloComponent } from './components/list-parcours-ecolo/list-parcours-ecolo.component';
import { ModalParcoursEcoloComponent } from './components/modal-parcours-ecolo/modal-parcours-ecolo.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    ListParcoursEcoloComponent,
    ModalParcoursEcoloComponent
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
    ListParcoursEcoloComponent,
    ModalParcoursEcoloComponent
  ],
})
export class ParcoursEcoloModule { }
