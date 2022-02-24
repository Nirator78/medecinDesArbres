import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScoreMoyenComponent } from './quiz-score-moyen.component';

describe('QuizScoreMoyenComponent', () => {
  let component: QuizScoreMoyenComponent;
  let fixture: ComponentFixture<QuizScoreMoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizScoreMoyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizScoreMoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
