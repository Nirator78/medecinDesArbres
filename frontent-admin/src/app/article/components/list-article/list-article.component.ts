import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../../environments/environment';
import { ConfirmationDialogService } from './../../../ui/confirmation-dialog/confirmation-dialog.service';
@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  faSync = faSync;
  faTrash = faTrash;
  confirmation;
  public articleList;
  public environment = environment;

  constructor(private articleService: ArticleService, private confirmationDialogService: ConfirmationDialogService) {
    this.articleList = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.articleList = await this.articleService.getAllArticle();
  }

  async deleteArticle(id) {
    await this.confirmationDialogService.confirm('Suppression', 'Voulez-vous vraiment effacer cet article ?')
    .then(confirm => this.confirmation = confirm)
    .catch(() => {});
    // Suppression d'un article
    if(this.confirmation){
      await this.articleService.deleteArticle(id);
    }
    // Puis on rafraichi la liste
    this.refresh();
  }

}
