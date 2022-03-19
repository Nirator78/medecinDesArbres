import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";

import { VilleService } from './ville.service';

describe('VilleService', () => {
  let service: VilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(VilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
