import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {StatistiqueCommandeService} from "../../services/statistique-commande.service";

@Component({
  selector: 'app-commande-chiffre-afffaire',
  templateUrl: './commande-chiffre-afffaire.component.html',
  styleUrls: ['./commande-chiffre-afffaire.component.css']
})
export class CommandeChiffreAfffaireComponent implements OnInit {

  public chiffreAffaireParMois;
  public environment = environment;

  constructor(private statistiqueCommandeService: StatistiqueCommandeService) {
    this.chiffreAffaireParMois = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.chiffreAffaireParMois = await this.statistiqueCommandeService.getChiffreAffaire();
  }

}
