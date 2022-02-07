import { Component, OnInit } from "@angular/core";
import {UserService} from "../../services/user.service";
import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"]
})
export class ListUserComponent implements OnInit {

  faSync = faSync;

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

}
