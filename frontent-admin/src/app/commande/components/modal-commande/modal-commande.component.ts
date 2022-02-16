import {Component, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {ListCommandeComponent} from "../list-commande/list-commande.component";
import {CommandeService} from "../../services/commande.service";
import {NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-modal-commande',
  templateUrl: './modal-commande.component.html',
  styleUrls: ['./modal-commande.component.css']
})
export class ModalCommandeComponent {

  @Input() mode!: string;
  @Input() commande: any = {};
  faPlus = faPlus;
  file;
  userList;


  constructor(private modalService: NgbModal, private calendar: NgbCalendar, private commandeService: CommandeService, private listCommandeComponent: ListCommandeComponent, private userService: UserService) {
    this.userList = [];
  }

  async open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title", size: "lg"}).result.then((result) => {
    }, (reason) => {
      this.listCommandeComponent.refresh()
    });
    if(this.mode === "modal"){
      this.commande = {}
    };
    // Récupération des liste pour le formulaire à l'ouverture sinon spam de l'api
    this.userList = await this.userService.getAllUser();
  }

  onSubmit(form: NgForm){
    let methode = "";
    if(this.commande.id){
      methode="updateCommande"
      form.value.id = this.commande = JSON.parse(this.commande.id);
    }
    else {
      methode="createCommande"
    }

    // Post de la commande
    this.commandeService[methode](form).then(async (res) => {
      // Ferme le modal
      this.modalService.dismissAll();
      // Refresh la liste des utilisateurs
      this.listCommandeComponent.refresh();
    });
  }

  onFileSelected(event) {
    this.file = event.target.files[0];
  }

}
