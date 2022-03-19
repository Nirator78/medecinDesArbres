import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";

import { StatistiqueQuizService } from './statistique-quiz.service';

describe('StatistiqueQuizService', () => {
  let service: StatistiqueQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(StatistiqueQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
