import { Component, OnInit } from '@angular/core';
import { faSync, faTrash } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../../environments/environment';
import {ConfirmationDialogService} from "../../../ui/confirmation-dialog/confirmation-dialog.service";
import {FichePedagogiqueService} from "../../services/fiche-pedagogique.service";

@Component({
  selector: 'app-list-fiche-pedagogique',
  templateUrl: './list-fiche-pedagogique.component.html',
  styleUrls: ['./list-fiche-pedagogique.component.css']
})
export class ListFichePedagogiqueComponent implements OnInit {

  faSync = faSync;
  faTrash = faTrash;
  confirmation;
  public fichePedagogiqueList;
  public environment = environment;

  constructor(private fichePedagogiqueService: FichePedagogiqueService, private confirmationDialogService: ConfirmationDialogService) {
    this.fichePedagogiqueList = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.fichePedagogiqueList = await this.fichePedagogiqueService.getAllFichePedagogique();
  }

  async deleteFichePedagogique(id) {
    await this.confirmationDialogService.confirm('Suppression', 'Voulez-vous vraiment effacer cet fiche pédagogique ?')
      .then(confirm => this.confirmation = confirm)
      .catch(() => {});
    // Suppression d'un fichePedagogique
    if(this.confirmation){
      await this.fichePedagogiqueService.deleteFichePedagogique(id);
    }
    // Puis on rafraichi la liste
    this.refresh();
  }
}
