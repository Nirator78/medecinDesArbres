import { Component, OnInit } from '@angular/core';
import { faSync, faTrash } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../../environments/environment';
import { ConfirmationDialogService } from '../../../ui/confirmation-dialog/confirmation-dialog.service';
import {ParcoursEcoloService} from "../../services/parcours-ecolo.service";

@Component({
  selector: 'app-list-parcours-ecolo',
  templateUrl: './list-parcours-ecolo.component.html',
  styleUrls: ['./list-parcours-ecolo.component.css']
})
export class ListParcoursEcoloComponent implements OnInit {
  faSync = faSync;
  faTrash = faTrash;
  confirmation;
  public parcoursEcoloList;
  public environment = environment;

  constructor(private parcoursEcoloService: ParcoursEcoloService, private confirmationDialogService: ConfirmationDialogService) {
    this.parcoursEcoloList = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.parcoursEcoloList = await this.parcoursEcoloService.getAllParcoursEcolo();
  }

  async deleteParcoursEcolo(id) {
    await this.confirmationDialogService.confirm('Suppression', 'Voulez-vous vraiment effacer cet parcours ecolo ?')
      .then(confirm => this.confirmation = confirm)
      .catch(() => {});
    // Suppression d'un parcours ecolo
    if(this.confirmation){
      await this.parcoursEcoloService.deleteParcoursEcolo(id);
    }
    // Puis on rafraichi la liste
    this.refresh();
  }
}
