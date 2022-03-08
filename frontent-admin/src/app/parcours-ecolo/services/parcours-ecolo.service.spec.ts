import { TestBed } from '@angular/core/testing';

import { ParcoursEcoloService } from './parcours-ecolo.service';

describe('ParcoursEcoloService', () => {
  let service: ParcoursEcoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParcoursEcoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
