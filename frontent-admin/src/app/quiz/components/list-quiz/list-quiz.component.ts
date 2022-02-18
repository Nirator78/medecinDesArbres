import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../../environments/environment';
import { ConfirmationDialogService } from '../../../ui/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {

  faSync = faSync;
  faTrash = faTrash;
  confirmation;
  public quizList;
  public environment = environment;

  constructor(private quizService: QuizService, private confirmationDialogService: ConfirmationDialogService) {
    this.quizList = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.quizList = await this.quizService.getAllQuiz();
  }

  async deleteQuiz(id) {
    await this.confirmationDialogService.confirm('Suppression', 'Voulez-vous vraiment effacer ce quiz ?')
    .then(confirm => this.confirmation = confirm)
    .catch(() => {});
    // Suppression d'un quiz
    if(this.confirmation){
      await this.quizService.deleteQuiz(id);
    }
    // Puis on rafraichi la liste
    this.refresh();
  }

}
