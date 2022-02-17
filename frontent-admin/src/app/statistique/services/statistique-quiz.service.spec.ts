import { TestBed } from '@angular/core/testing';

import { StatistiqueQuizService } from './statistique-quiz.service';

describe('StatistiqueQuizService', () => {
  let service: StatistiqueQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatistiqueQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
