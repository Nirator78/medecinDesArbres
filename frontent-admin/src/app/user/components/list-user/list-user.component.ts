import { Component, OnInit } from "@angular/core";
import {UserService} from "../../services/user.service";
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ConfirmationDialogService } from './../../../ui/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"]
})
export class ListUserComponent implements OnInit {

  faSync = faSync;
  faTrash = faTrash;
  confirmation;

  public userList;

  constructor(private userService: UserService, private confirmationDialogService: ConfirmationDialogService) {
    this.userList = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.userList = await this.userService.getAllUser();
  }

  async deleteUser(id) {
    await this.confirmationDialogService.confirm('Suppression', 'Voulez-vous vraiment effacer cet utilisateur ?')
    .then(confirm => this.confirmation = confirm)
    .catch(() => {});
    // Suppression de l'utilisateur
    if(this.confirmation){
      await this.userService.deleteUser(id);
    }
    // Suppression de l'utilisateur

    // Puis on rafraichi la liste
    this.refresh();
  }

}
