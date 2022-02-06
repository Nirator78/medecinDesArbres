import { Component, OnInit } from "@angular/core";
import {UserService} from "../../services/user.service";
import {ApiService} from "../../../services/api.service";
import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"]
})
export class ListUserComponent implements OnInit {

  faSync = faSync;

  public userList;
  private errorMessage;

  constructor(private userService: UserService, private apiService: ApiService) {
    this.userList = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  refresh() {
    this.apiService.getTypeRequest(`users`).subscribe((res:any)=>
    {
      this.userList = res.data;
    },err => {
      this.errorMessage =  err['error'].message;
    });
  }

}
