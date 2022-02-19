import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFichePedagogiqueComponent } from './components/list-fiche-pedagogique/list-fiche-pedagogique.component';
import { ModalFichePedagogiqueComponent } from './components/modal-fiche-pedagogique/modal-fiche-pedagogique.component';



@NgModule({
  declarations: [
    ListFichePedagogiqueComponent,
    ModalFichePedagogiqueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FichePedagogiqueModule { }
