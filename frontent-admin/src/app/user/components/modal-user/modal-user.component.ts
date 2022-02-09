import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import {UserService} from "../../services/user.service";
import {ListUserComponent} from "../list-user/list-user.component";

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent {

  faPlus = faPlus;

  constructor(private modalService: NgbModal, private userService: UserService, private listUserComponent: ListUserComponent) {

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  onSubmit(form: NgForm){
    this.userService.createUser(form).then(() => {
      this.modalService.dismissAll();
      this.listUserComponent.refresh();
    });
  }

}
