import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatistiqueCommandeComponent } from './pages/statistique-commande/statistique-commande.component';
import { StatistiqueQuizComponent } from './pages/statistique-quiz/statistique-quiz.component';
import { CommandeTopFiveComponent } from './components/commande-top-five/commande-top-five.component';
import { CommandeChiffreAfffaireComponent } from './components/commande-chiffre-afffaire/commande-chiffre-afffaire.component';
import { CommandePanierMoyenComponent } from './components/commande-panier-moyen/commande-panier-moyen.component';
import {HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { QuizScoreMoyenComponent } from './components/quiz-score-moyen/quiz-score-moyen.component';
import { QuizMeilleurJoueurComponent } from './components/quiz-meilleur-joueur/quiz-meilleur-joueur.component';
import { QuizRatioReponseTopComponent } from './components/quiz-ratio-reponse-top/quiz-ratio-reponse-top.component';

@NgModule({
  declarations: [
    StatistiqueCommandeComponent,
    StatistiqueQuizComponent,
    CommandeTopFiveComponent,
    CommandeChiffreAfffaireComponent,
    CommandePanierMoyenComponent,
    QuizScoreMoyenComponent,
    QuizMeilleurJoueurComponent,
    QuizRatioReponseTopComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    StatistiqueCommandeComponent,
    StatistiqueQuizComponent,
    CommandeTopFiveComponent,
    CommandeChiffreAfffaireComponent,
    CommandePanierMoyenComponent
  ],
})
export class StatistiqueModule { }
