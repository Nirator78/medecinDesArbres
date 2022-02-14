import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPanierComponent } from './components/modal-panier/modal-panier.component';
import { ListPanierComponent } from './components/list-panier/list-panier.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    ModalPanierComponent,
    ListPanierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  exports: [
    ModalPanierComponent,
    ListPanierComponent
  ],
})
export class PanierModule { }
