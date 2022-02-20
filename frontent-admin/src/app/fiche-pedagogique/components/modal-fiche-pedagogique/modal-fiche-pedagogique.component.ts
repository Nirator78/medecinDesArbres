import {Component, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { faPlus, faTrash, faClone } from "@fortawesome/free-solid-svg-icons";
import {NgForm} from "@angular/forms";
import {FichePedagogiqueService} from "../../services/fiche-pedagogique.service";
import {ListFichePedagogiqueComponent} from "../list-fiche-pedagogique/list-fiche-pedagogique.component";

@Component({
  selector: 'app-modal-fiche-pedagogique',
  templateUrl: './modal-fiche-pedagogique.component.html',
  styleUrls: ['./modal-fiche-pedagogique.component.css']
})
export class ModalFichePedagogiqueComponent {

  @Input() mode!: string;
  @Input() fichePedagogique: any = {};
  faPlus = faPlus;
  faTrash = faTrash;
  faClone = faClone;
  showQuizQuestionForm;

  constructor(private modalService: NgbModal, private fichePedagogiqueService: FichePedagogiqueService, private listFichePedagogiqueComponent: ListFichePedagogiqueComponent) {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title", size: "lg"});
  }

  onSubmit(form: NgForm){
    let methode = "";
    if(this.fichePedagogique.id){
      methode="updateFichePedagogique"
      form.value.id = JSON.parse(this.fichePedagogique.id);
    }
    else {
      methode="createFichePedagogique"
    }

    // Post de la fiche pédagogique
    this.fichePedagogiqueService[methode](form).then(async (res) => {
      // Ferme le modal
      this.modalService.dismissAll();
      // Refresh la liste des utilisateurs
      this.listFichePedagogiqueComponent.refresh();
    });
  }
}
