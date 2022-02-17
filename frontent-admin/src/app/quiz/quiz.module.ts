import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListQuizComponent } from './components/list-quiz/list-quiz.component';
import { ModalQuizComponent } from './components/modal-quiz/modal-quiz.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ListQuizComponent,
    ModalQuizComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],  
  exports: [
    ListQuizComponent,
    ModalQuizComponent
  ],
})
export class QuizModule { }
