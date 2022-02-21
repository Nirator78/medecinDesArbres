import {Component, Input} from '@angular/core';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {ParcoursEcoloService} from "../../services/parcours-ecolo.service";
import {ListParcoursEcoloComponent} from "../list-parcours-ecolo/list-parcours-ecolo.component";

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

  constructor(private modalService: NgbModal, private parcoursEcoloService: ParcoursEcoloService, private listParcoursEcoloComponent: ListParcoursEcoloComponent) {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title", size: "lg"});
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
