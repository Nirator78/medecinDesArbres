import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";

import { ConferenceService } from './conference.service';

describe('ConferenceService', () => {
  let service: ConferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(ConferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
