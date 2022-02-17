import { Component, OnInit } from '@angular/core';
import {StatistiqueCommandeService} from "../../services/statistique-commande.service";

@Component({
  selector: 'app-commande-top-five',
  templateUrl: './commande-top-five.component.html',
  styleUrls: ['./commande-top-five.component.css']
})
export class CommandeTopFiveComponent implements OnInit {

  public topFiveBestSeller;

  constructor(private statistiqueCommandeService: StatistiqueCommandeService) {
    this.topFiveBestSeller = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.topFiveBestSeller = await this.statistiqueCommandeService.getTopFiveBestSeller();
  }

}
