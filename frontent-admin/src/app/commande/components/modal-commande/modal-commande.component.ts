import {Component, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import { faPlus, faTrash, faClone } from "@fortawesome/free-solid-svg-icons";
import {ListCommandeComponent} from "../list-commande/list-commande.component";
import {CommandeService} from "../../services/commande.service";
import {NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/user/services/user.service';
import { ArticleService } from 'src/app/article/services/article.service';
@Component({
  selector: 'app-modal-commande',
  templateUrl: './modal-commande.component.html',
  styleUrls: ['./modal-commande.component.css']
})
export class ModalCommandeComponent {

  @Input() mode!: string;
  @Input() commande: any = {};
  faPlus = faPlus;
  faTrash = faTrash;
  faClone = faClone;
  file;
  showCommandeLigneForm;
  userList;
  articleList;
  currentCommandeLigne = {};


  constructor(private modalService: NgbModal, private calendar: NgbCalendar, private commandeService: CommandeService, private listCommandeComponent: ListCommandeComponent, private userService: UserService, private articleService: ArticleService) {
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
    this.showCommandeLigneForm = !this.commande.id;
    // Récupération des liste pour le formulaire à l'ouverture sinon spam de l'api
    this.userList = await this.userService.getAllUser();
    this.articleList = await this.articleService.getAllArticle();

  }

  onSubmit(form: NgForm){

    let methode = "";
    if(this.commande.id){
      methode="updateCommande"
      form.value.id = JSON.parse(this.commande.id);
    }
    else {
      methode="createCommande"
    }
    form.value.commandeLignes = this.commande.commandeLignes
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

  addCommandeLigne(formLigne: NgForm){
        console.log(formLigne.value)
        const commandeLigne = formLigne.value;

        // Si on est en création, la commande courante n'a pas encore de ligne de commande du coup cette condition sera vraie
        if (! Array.isArray(this.commande.commandeLignes)) {
            // On crée alors la ligne de commande avec un item;
            this.commande.commandeLignes = [ commandeLigne ];
        }

        // Si on est en modification, on unshift le nouvel item (on rajoute le nouvel élément au début de l'array)
        else {
            if (! this.commande.commandeLignes.includes(commandeLigne)) {
              console.log(commandeLigne)
                this.commande.commandeLignes.push(commandeLigne);
            }
        }
        
  }

  toggleShowCommandeLigneForm(show) {
    this.showCommandeLigneForm = show;
  }

  selectCommandeLigne(commandeLignes) {

    this.toggleShowCommandeLigneForm(true);
    Object.assign(this.commande,commandeLignes)
  }

  async deleteCommandeLigne(index) {
    const commandeLignes = this.commande.commandeLignes;
    /*await this.confirmationDialogService.confirm('Suppression', 'Voulez-vous vraiment effacer cet commande ?')
      .then(confirm => this.confirmation = confirm)
      .catch(() => {});*/
    // Suppression d'une commande

    // suppression de l'élément du tableau
    commandeLignes.splice(index, 1);
    //this.refresh();
  }
}
