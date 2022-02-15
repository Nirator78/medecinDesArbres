import { Component, OnInit } from '@angular/core';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ConfirmationDialogService } from 'src/app/ui/confirmation-dialog/confirmation-dialog.service';
import {PasswordKeyService} from "../../services/password-key.service";

@Component({
  selector: 'app-list-password-key',
  templateUrl: './list-password-key.component.html',
  styleUrls: ['./list-password-key.component.css']
})
export class ListPasswordKeyComponent implements OnInit {

  faSync = faSync;
  faTrash = faTrash;
  confirmation;

  public passwordKeyList;

  constructor(private passwordKeyService: PasswordKeyService, private confirmationDialogService: ConfirmationDialogService) {
    this.passwordKeyList = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.passwordKeyList = await this.passwordKeyService.getAllPasswordKey();
  }

  async deletePasswordKey(id) {
    await this.confirmationDialogService.confirm('Suppression', 'Voulez-vous vraiment effacer cette demande ?')
    .then(confirm => this.confirmation = confirm)
    .catch(() => {});
    // Suppression de la demande de mot de passe oublié
    if(this.confirmation){
      await this.passwordKeyService.deletePasswordKey(id);
    }
    // Puis on rafraichi la liste
    this.refresh();
  }

}
