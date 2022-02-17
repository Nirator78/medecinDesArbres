import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatistiqueCommandeComponent } from './pages/statistique-commande/statistique-commande.component';
import { StatistiqueQuizComponent } from './pages/statistique-quiz/statistique-quiz.component';
import { StatistiqueVisualNovelComponent } from './pages/statistique-visual-novel/statistique-visual-novel.component';
import { CommandeTopFiveComponent } from './components/commande-top-five/commande-top-five.component';
import { CommandeChiffreAfffaireComponent } from './components/commande-chiffre-afffaire/commande-chiffre-afffaire.component';
import { CommandePanierMoyenComponent } from './components/commande-panier-moyen/commande-panier-moyen.component';
import {HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    StatistiqueCommandeComponent,
    StatistiqueQuizComponent,
    StatistiqueVisualNovelComponent,
    CommandeTopFiveComponent,
    CommandeChiffreAfffaireComponent,
    CommandePanierMoyenComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    StatistiqueCommandeComponent,
    StatistiqueQuizComponent,
    StatistiqueVisualNovelComponent,
    CommandeTopFiveComponent,
    CommandeChiffreAfffaireComponent,
    CommandePanierMoyenComponent
  ],
})
export class StatistiqueModule { }
