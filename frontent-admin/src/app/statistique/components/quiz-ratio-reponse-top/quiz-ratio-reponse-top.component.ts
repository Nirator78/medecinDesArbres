import { Component } from '@angular/core';
import {StatistiqueQuizService} from "../../services/statistique-quiz.service";

@Component({
  selector: 'app-quiz-ratio-reponse-top',
  templateUrl: './quiz-ratio-reponse-top.component.html',
  styleUrls: ['./quiz-ratio-reponse-top.component.css']
})
export class QuizRatioReponseTopComponent {

  public ratioReponseTop;

  constructor(private statistiqueQuizService: StatistiqueQuizService) {
    this.ratioReponseTop = [];
    this.refresh();
  }

  async refresh() {
    this.ratioReponseTop = await this.statistiqueQuizService.getQuizRatioReponseTop();
  }

}
