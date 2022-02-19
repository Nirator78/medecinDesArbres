import { TestBed } from '@angular/core/testing';

import { FichePedagogiqueService } from './fiche-pedagogique.service';

describe('FichePedagogiqueService', () => {
  let service: FichePedagogiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichePedagogiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
