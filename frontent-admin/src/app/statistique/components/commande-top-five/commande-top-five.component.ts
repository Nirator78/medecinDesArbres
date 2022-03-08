import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {StatistiqueCommandeService} from "../../services/statistique-commande.service";

@Component({
  selector: 'app-commande-top-five',
  templateUrl: './commande-top-five.component.html',
  styleUrls: ['./commande-top-five.component.css']
})
export class CommandeTopFiveComponent {

  public topFiveBestSeller;
  public environment = environment;

  constructor(private statistiqueCommandeService: StatistiqueCommandeService) {
    this.topFiveBestSeller = [];
    this.refresh();
  }

  async refresh() {
    this.topFiveBestSeller = await this.statistiqueCommandeService.getTopFiveBestSeller();
  }

}
