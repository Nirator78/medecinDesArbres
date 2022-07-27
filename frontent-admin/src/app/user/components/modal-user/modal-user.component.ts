import { Component, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import {UserService} from "../../services/user.service";
import {ListUserComponent} from "../list-user/list-user.component";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent {

  @Input() mode!: string;
  @Input() user: any = {};
  faPlus = faPlus;
  userConnecter ;

  constructor(private modalService: NgbModal, private userService: UserService, private listUserComponent: ListUserComponent, private authService: AuthService) {
    this.userConnecter = this.authService.getUserDetails();
    this.userConnecter = JSON.parse(this.userConnecter);
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  onSubmit(form: NgForm){
    let methode = "";
    if(this.user.id){
      methode="updateUser"
      form.value.id = this.user = JSON.parse(this.user.id);
    }
    else {
      methode="createUser"
      // On encrypt le mot de passe avant de l'envoyé à l'api
      form.value.password = this.authService.encryptPassword(form.value.password);
    }
    // Post l'utilisateur
    this.userService[methode](form).then(() => {
      // Ferme le modal
      form.resetForm();
      this.modalService.dismissAll();
      // Refresh la liste des utilisateurs
      this.listUserComponent.refresh();
    });
  }

}
