import { Component, OnInit } from '@angular/core';
import {PanierService} from "../../services/panier.service";
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ConfirmationDialogService } from 'src/app/ui/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-list-panier',
  templateUrl: './list-panier.component.html',
  styleUrls: ['./list-panier.component.css']
})
export class ListPanierComponent implements OnInit {

  faSync = faSync;
  faTrash = faTrash;
  confirmation;

  public panierList;

  constructor(private panierService: PanierService, private confirmationDialogService : ConfirmationDialogService) {
    this.panierList = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.panierList = await this.panierService.getAllPanier();
  }

  async deletePanier(id) {
    await this.confirmationDialogService.confirm('Suppression', 'Voulez-vous vraiment effacer ce panier ?')
    .then(confirm => this.confirmation = confirm)
    .catch(() => {});
    // Suppression du panier
    if (this.confirmation){
      await this.panierService.deletePanier(id);
    }
    // Puis on rafraichi la liste
    this.refresh();
  }
}
