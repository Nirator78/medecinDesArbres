import { Component, OnInit } from "@angular/core";
import {UserService} from "../../services/user.service";
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"]
})
export class ListUserComponent implements OnInit {

  faSync = faSync;
  faTrash = faTrash;

  public userList;

  constructor(private userService: UserService) {
    this.userList = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.userList = await this.userService.getAllUser();
  }

  async deleteUser(id) {
    // Suppression de l'utilisateur
    await this.userService.deleteUser(id);
    // Puis on rafraichi la liste
    this.refresh();
  }

}
