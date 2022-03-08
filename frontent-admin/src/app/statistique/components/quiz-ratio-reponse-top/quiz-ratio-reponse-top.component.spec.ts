import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizRatioReponseTopComponent } from './quiz-ratio-reponse-top.component';

describe('QuizRatioReponseTopComponent', () => {
  let component: QuizRatioReponseTopComponent;
  let fixture: ComponentFixture<QuizRatioReponseTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizRatioReponseTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizRatioReponseTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
