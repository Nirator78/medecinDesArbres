import { Component, OnInit } from '@angular/core';
import {PanierService} from "../../services/panier.service";
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-panier',
  templateUrl: './list-panier.component.html',
  styleUrls: ['./list-panier.component.css']
})
export class ListPanierComponent implements OnInit {

  faSync = faSync;
  faTrash = faTrash;

  public panierList;

  constructor(private panierService: PanierService) {
    this.panierList = [];
    this.refresh();
  }

  ngOnInit(): void {
  }

  async refresh() {
    this.panierList = await this.panierService.getAllPanier();
  }

  async deletePanier(id) {
    // Suppression du panier
    await this.panierService.deletePanier(id);
    // Puis on rafraichi la liste
    this.refresh();
  }
}
