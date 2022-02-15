import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCommandeComponent } from './components/list-commande/list-commande.component';
import { ModalCommandeComponent } from './components/modal-commande/modal-commande.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    ListCommandeComponent,
    ModalCommandeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  exports: [
    ListCommandeComponent,
    ModalCommandeComponent
  ],
})
export class CommandeModule { }
