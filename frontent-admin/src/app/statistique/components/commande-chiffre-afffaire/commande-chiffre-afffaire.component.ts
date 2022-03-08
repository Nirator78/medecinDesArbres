import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {StatistiqueCommandeService} from "../../services/statistique-commande.service";

@Component({
  selector: 'app-commande-chiffre-afffaire',
  templateUrl: './commande-chiffre-afffaire.component.html',
  styleUrls: ['./commande-chiffre-afffaire.component.css']
})
export class CommandeChiffreAfffaireComponent {

  public chiffreAffaireParMois;
  public environment = environment;

  constructor(private statistiqueCommandeService: StatistiqueCommandeService) {
    this.chiffreAffaireParMois = [];
    this.refresh();
  }

  async refresh() {
    this.chiffreAffaireParMois = await this.statistiqueCommandeService.getChiffreAffaire();
  }

}
