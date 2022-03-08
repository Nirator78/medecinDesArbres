import { Component, OnInit } from '@angular/core';
import {CommandeService} from "../../services/commande.service";
import { faSync, faTrash } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../../environments/environment';
import {ConfirmationDialogService} from "../../../ui/confirmation-dialog/confirmation-dialog.service";

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {

  faSync = faSync;
  faTrash = faTrash;
  confirmation;
  public commandeList;
  public environment = environment;

  constructor(private commandeService: CommandeService, private confirmationDialogService: ConfirmationDialogService) {
    this.commandeList = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.commandeList = await this.commandeService.getAllCommande();
  }

  async deleteCommande(id) {
    await this.confirmationDialogService.confirm('Suppression', 'Voulez-vous vraiment effacer cette commande ?')
      .then(confirm => this.confirmation = confirm)
      .catch(() => {});
    // Suppression d'une commande
    if(this.confirmation){
      await this.commandeService.deleteCommande(id);
    }
    // Puis on rafraichi la liste
    this.refresh();
  }

}
