import { Component } from '@angular/core';
import {StatistiqueQuizService} from "../../services/statistique-quiz.service";

@Component({
  selector: 'app-quiz-score-moyen',
  templateUrl: './quiz-score-moyen.component.html',
  styleUrls: ['./quiz-score-moyen.component.css']
})
export class QuizScoreMoyenComponent {

  public scoreMoyenQuiz;

  constructor(private statistiqueQuizService: StatistiqueQuizService) {
    this.scoreMoyenQuiz = [];
    this.refresh();
  }

  async refresh() {
    this.scoreMoyenQuiz = await this.statistiqueQuizService.getQuizScoreMoyen();
  }

}
