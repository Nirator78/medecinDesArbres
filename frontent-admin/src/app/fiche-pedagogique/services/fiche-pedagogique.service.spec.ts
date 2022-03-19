import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";

import { FichePedagogiqueService } from './fiche-pedagogique.service';

describe('FichePedagogiqueService', () => {
  let service: FichePedagogiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(FichePedagogiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
