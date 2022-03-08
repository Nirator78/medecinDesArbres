import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {StatistiqueCommandeService} from "../../services/statistique-commande.service";

@Component({
  selector: 'app-commande-panier-moyen',
  templateUrl: './commande-panier-moyen.component.html',
  styleUrls: ['./commande-panier-moyen.component.css']
})
export class CommandePanierMoyenComponent {

  public panierMoyenParMois;
  public environment = environment;

  constructor(private statistiqueCommandeService: StatistiqueCommandeService) {
    this.panierMoyenParMois = [];
    this.refresh();
  }

  async refresh() {
    this.panierMoyenParMois = await this.statistiqueCommandeService.getPanierMoyen();
  }

}
