import { TestBed } from '@angular/core/testing';

import { StatistiqueVisualNovelService } from './statistique-visual-novel.service';

describe('StatistiqueVisualNovelService', () => {
  let service: StatistiqueVisualNovelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatistiqueVisualNovelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
