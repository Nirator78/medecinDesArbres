import { Component, Input } from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NgForm } from "@angular/forms";
import { ArticleService } from "../../services/article.service";
import { ListArticleComponent } from "../list-article/list-article.component";

@Component({
  selector: "app-modal-article",
  templateUrl: "./modal-article.component.html",
  styleUrls: ["./modal-article.component.css"]
})
export class ModalArticleComponent  {

  @Input() mode!: string;
  @Input() article: any = {};
  faPlus = faPlus;
  file;

  constructor(private modalService: NgbModal, private articleService: ArticleService, private listArticleComponent: ListArticleComponent) {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title", size: "lg"});
  }

  onSubmit(form: NgForm){
    let methode = "";
    if(this.article.id){
      methode="updateArticle"
      form.value.id = this.article = JSON.parse(this.article.id);
    }
    else {
      methode="createArticle"
    }

    // Post l"utilisateur
    this.articleService[methode](form).then(async (res) => {
      // Upload du fichier après création de l'article
      if(this.file){
        const formData = new FormData();

        formData.append("image", this.file);

        await this.articleService.uploadImageArticle(res.id, formData);
      }

      // Ferme le modal
      this.modalService.dismissAll();
      // Refresh la liste des utilisateurs
      this.listArticleComponent.refresh();
    });
  }

  onFileSelected(event) {
    this.file = event.target.files[0];
  }

}
