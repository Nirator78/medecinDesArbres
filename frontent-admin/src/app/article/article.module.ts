import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { ModalArticleComponent } from './components/modal-article/modal-article.component';



@NgModule({
  declarations: [
    ListArticleComponent,
    ModalArticleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArticleModule { }
