import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";

import { StatistiqueCommandeService } from './statistique-commande.service';

describe('StatistiqueCommandeService', () => {
  let service: StatistiqueCommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(StatistiqueCommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
