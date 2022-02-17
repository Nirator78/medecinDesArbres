import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueQuizComponent } from './statistique-quiz.component';

describe('StatistiqueQuizComponent', () => {
  let component: StatistiqueQuizComponent;
  let fixture: ComponentFixture<StatistiqueQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
