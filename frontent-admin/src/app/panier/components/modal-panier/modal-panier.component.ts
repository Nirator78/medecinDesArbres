import {Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import {ListPanierComponent} from "../list-panier/list-panier.component";
import {PanierService} from "../../services/panier.service";
import {UserService} from "../../../user/services/user.service";
import {ArticleService} from "../../../article/services/article.service";

@Component({
  selector: 'app-modal-panier',
  templateUrl: './modal-panier.component.html',
  styleUrls: ['./modal-panier.component.css']
})
export class ModalPanierComponent{

  @Input() mode!: string;
  @Input() panier: any = {};

  faPlus = faPlus;

  userList;
  articleList;

  constructor(private modalService: NgbModal, private panierService: PanierService, private listPanierComponent: ListPanierComponent, private userService: UserService, private articleService: ArticleService) {
    this.userList = [];
    this.articleList = [];
  }

  async open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
    }, (reason) => {
      this.listPanierComponent.refresh()
    });
    if(this.mode === "modal"){
      this.panier = {}
    }
    console.log(this.panier)

    // Récupération des liste pour le formulaire à l'ouverture sinon spam de l'api
    this.userList = await this.userService.getAllUser();
    this.articleList = await this.articleService.getAllArticle();
  }

  onSubmit(form: NgForm){
    let methode = "";
    if(this.panier.id){
      methode="updatePanier"
      form.value.id = this.panier = JSON.parse(this.panier.id);
    }
    else {
      methode="createPanier"
    }
    // Post le panier
    this.panierService[methode](form).then(() => {
    // Ferme le modal
    this.modalService.dismissAll();
    // Refresh la liste des paniers
    this.listPanierComponent.refresh();
    });
  }
  
}
