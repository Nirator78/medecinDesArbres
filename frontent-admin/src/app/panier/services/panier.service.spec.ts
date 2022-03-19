import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";

import { PanierService } from './panier.service';

describe('PanierService', () => {
  let service: PanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(PanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
