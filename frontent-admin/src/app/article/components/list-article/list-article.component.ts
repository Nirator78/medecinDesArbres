import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  faSync = faSync;
  faTrash = faTrash;

  public articleList;
  public environment = environment;

  constructor(private articleService: ArticleService) {
    this.articleList = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.articleList = await this.articleService.getAllArticle();
  }

  async deleteUser(id) {
    // Suppression de l'utilisateur
    await this.articleService.deleteArticle(id);
    // Puis on rafraichi la liste
    this.refresh();
  }

}
