import {Component, Input} from '@angular/core';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {ParcoursEcoloService} from "../../services/parcours-ecolo.service";
import {ListParcoursEcoloComponent} from "../list-parcours-ecolo/list-parcours-ecolo.component";
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-modal-parcours-ecolo',
  templateUrl: './modal-parcours-ecolo.component.html',
  styleUrls: ['./modal-parcours-ecolo.component.css']
})
export class ModalParcoursEcoloComponent {

  @Input() mode!: string;
  @Input() parcoursecolo: any = {};
  faPlus = faPlus;
  file;
  userList;

  constructor(private modalService: NgbModal, private parcoursEcoloService: ParcoursEcoloService, private listParcoursEcoloComponent: ListParcoursEcoloComponent, private userService: UserService) {
    this.userList = [];
  }

  async open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title", size: "lg"}).result.then((result) => {
    }, (reason) => {
      this.listParcoursEcoloComponent.refresh()
    });
    if(this.mode === "modal"){
      this.parcoursecolo = {}
    };
    // Récupération des liste pour le formulaire à l'ouverture sinon spam de l'api
    this.userList = await this.userService.getAllUser();
  }

  onSubmit(form: NgForm){
    let methode = "";
    if(this.parcoursecolo.id){
      methode="updateParcoursEcolo"
      form.value.id = JSON.parse(this.parcoursecolo.id);
    }
    else {
      methode="createParcoursEcolo"
    }

    // Post du parcours ecolo
    this.parcoursEcoloService[methode](form).then(async (res) => {
      // Upload du fichier après création de l'parcoursEcolo
      if(this.file){
        const formData = new FormData();

        formData.append("image", this.file);

        await this.parcoursEcoloService.uploadImageParcoursEcolo(res.id, formData);
      }

      // Ferme le modal
      this.modalService.dismissAll();
      // Refresh la liste des utilisateurs
      this.listParcoursEcoloComponent.refresh();
    });
  }

  onFileSelected(event) {
    this.file = event.target.files[0];
  }

}
