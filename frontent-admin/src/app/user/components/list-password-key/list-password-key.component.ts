import { Component, OnInit } from '@angular/core';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {PasswordKeyService} from "../../services/password-key.service";

@Component({
  selector: 'app-list-password-key',
  templateUrl: './list-password-key.component.html',
  styleUrls: ['./list-password-key.component.css']
})
export class ListPasswordKeyComponent implements OnInit {

  faSync = faSync;
  faTrash = faTrash;

  public passwordKeyList;

  constructor(private passwordKeyService: PasswordKeyService) {
    this.passwordKeyList = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.passwordKeyList = await this.passwordKeyService.getAllPasswordKey();
  }

  async deletePasswordKey(id) {
    // Suppression de la demande de mot de passe oublié
    await this.passwordKeyService.deletePasswordKey(id);
    // Puis on rafraichi la liste
    this.refresh();
  }

}
