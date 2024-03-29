import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/components/login/login.component";
import {LoginGuard} from "./guard/login/login.guard";
import {MenuAdminComponent} from "./menu-admin/menu-admin.component";
import {ListUserComponent} from "./user/components/list-user/list-user.component";
import {ListPasswordKeyComponent} from "./user/components/list-password-key/list-password-key.component";
import {ListArticleComponent} from "./article/components/list-article/list-article.component";
import {ListPanierComponent} from "./panier/components/list-panier/list-panier.component";
import {ListCommandeComponent} from "./commande/components/list-commande/list-commande.component";
import { ListQuizComponent } from './quiz/components/list-quiz/list-quiz.component';
import {StatistiqueCommandeComponent} from "./statistique/pages/statistique-commande/statistique-commande.component";
import {StatistiqueQuizComponent} from "./statistique/pages/statistique-quiz/statistique-quiz.component";
import {ListFichePedagogiqueComponent} from "./fiche-pedagogique/components/list-fiche-pedagogique/list-fiche-pedagogique.component";
import {ListParcoursEcoloComponent} from "./parcours-ecolo/components/list-parcours-ecolo/list-parcours-ecolo.component";
import { ListConferenceComponent } from './conference/components/list-conference/list-conference.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: MenuAdminComponent, canActivate:[LoginGuard] },
  { path: 'utilisateur', component: ListUserComponent, canActivate:[LoginGuard] },
  { path: 'password-key', component: ListPasswordKeyComponent, canActivate:[LoginGuard] },
  { path: 'article', component: ListArticleComponent, canActivate:[LoginGuard] },
  { path: 'panier', component: ListPanierComponent, canActivate:[LoginGuard] },
  { path: 'commande', component: ListCommandeComponent, canActivate:[LoginGuard] },
  { path: 'quiz', component: ListQuizComponent, canActivate:[LoginGuard] },
  { path: 'statistique-commande', component: StatistiqueCommandeComponent, canActivate:[LoginGuard] },
  { path: 'statistique-quiz', component: StatistiqueQuizComponent, canActivate:[LoginGuard] },
  { path: 'fiche-pedagogique', component: ListFichePedagogiqueComponent, canActivate:[LoginGuard] },
  { path: 'parcours-ecolo', component: ListParcoursEcoloComponent, canActivate:[LoginGuard] },
  { path: 'conference', component: ListConferenceComponent, canActivate:[LoginGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
