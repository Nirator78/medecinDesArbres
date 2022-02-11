import { Component, Input } from '@angular/core';
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

  @Input() mode!: string;
  @Input() user!: any;
  faPlus = faPlus;

  constructor(private modalService: NgbModal, private userService: UserService, private listUserComponent: ListUserComponent) {

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  onSubmit(form: NgForm){
    // Post l'utilisateur
    this.userService.createUser(form).then(() => {
      // Ferme le modal
      this.modalService.dismissAll();
      // Refresh la liste des utilisateurs
      this.listUserComponent.refresh();
    });
  }

}
