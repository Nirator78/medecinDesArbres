import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";

import { ParcoursEcoloService } from './parcours-ecolo.service';

describe('ParcoursEcoloService', () => {
  let service: ParcoursEcoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(ParcoursEcoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
