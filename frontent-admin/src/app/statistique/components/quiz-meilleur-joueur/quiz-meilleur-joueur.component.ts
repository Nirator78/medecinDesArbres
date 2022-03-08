import { Component } from '@angular/core';
import {StatistiqueQuizService} from "../../services/statistique-quiz.service";

@Component({
  selector: 'app-quiz-meilleur-joueur',
  templateUrl: './quiz-meilleur-joueur.component.html',
  styleUrls: ['./quiz-meilleur-joueur.component.css']
})
export class QuizMeilleurJoueurComponent {

  public meilleurJoueurs;

  constructor(private statistiqueQuizService: StatistiqueQuizService) {
    this.meilleurJoueurs = [];
    this.refresh();
  }

  async refresh() {
    this.meilleurJoueurs = await this.statistiqueQuizService.getQuizMeilleurJoueur();
  }

}
