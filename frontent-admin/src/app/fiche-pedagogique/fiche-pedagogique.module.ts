import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFichePedagogiqueComponent } from './components/list-fiche-pedagogique/list-fiche-pedagogique.component';
import { ModalFichePedagogiqueComponent } from './components/modal-fiche-pedagogique/modal-fiche-pedagogique.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    ListFichePedagogiqueComponent,
    ModalFichePedagogiqueComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  exports: [
    ListFichePedagogiqueComponent,
    ModalFichePedagogiqueComponent
  ],
})
export class FichePedagogiqueModule { }
