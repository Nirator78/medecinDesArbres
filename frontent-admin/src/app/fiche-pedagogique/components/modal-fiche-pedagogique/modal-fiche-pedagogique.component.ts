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
  showSousPartieFichePedagogiquesForm;
  sousPartieFichePedagogique = {};  

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
    form.value.sousPartieFichePedagogiques = this.fichePedagogique.sousPartieFichePedagogiques
    // Post de la fiche pédagogique
    this.fichePedagogiqueService[methode](form).then(async (res) => {
      // Ferme le modal
      form.resetForm();
      this.modalService.dismissAll();
      // Refresh la liste des utilisateurs
      this.listFichePedagogiqueComponent.refresh();
    });
  }

  addSousPartieFichePedagogiques(formSousPartieFichePedagogiques: NgForm){
    const sousPartieFichePedagogiques = formSousPartieFichePedagogiques.value;

    // Si on est en création, la fichePedagogique courante n'a pas encore de ligne de fichePedagogique du coup cette condition sera vraie
    if (! Array.isArray(this.fichePedagogique.sousPartieFichePedagogiques)) {
        // On crée alors la ligne de fichePedagogique avec un item;
        this.fichePedagogique.sousPartieFichePedagogiques = [ sousPartieFichePedagogiques ];
    }

    // Si on est en modification, on unshift le nouvel item (on rajoute le nouvel élément au début de l'array)
    else {
        if (! this.fichePedagogique.sousPartieFichePedagogiques.includes(sousPartieFichePedagogiques)) {
            this.fichePedagogique.sousPartieFichePedagogiques.push(sousPartieFichePedagogiques);
        }
    }

  }
  
  toggleShowSousPartieFichePedagogiquesForm(show) {
    this.showSousPartieFichePedagogiquesForm = show;
  }

  selectSousPartieFichePedagogiques(sousPartieFichePedagogiques) {

    this.toggleShowSousPartieFichePedagogiquesForm(true);
    Object.assign(this.fichePedagogique,sousPartieFichePedagogiques)
  }

  async deleteSousPartieFichePedagogiques(index) {
    const sousPartieFichePedagogiques = this.fichePedagogique.sousPartieFichePedagogiques;

    /*await this.confirmationDialogService.confirm('Suppression', 'Voulez-vous vraiment effacer cet fichePedagogique ?')
      .then(confirm => this.confirmation = confirm)
      .catch(() => {});*/
    // Suppression d'une fichePedagogique

    // suppression de l'élément du tableau
    sousPartieFichePedagogiques.splice(index, 1);
    //this.refresh();
  }
}
