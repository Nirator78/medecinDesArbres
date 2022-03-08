import { TestBed } from '@angular/core/testing';

import { StatistiqueCommandeService } from './statistique-commande.service';

describe('StatistiqueCommandeService', () => {
  let service: StatistiqueCommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatistiqueCommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
