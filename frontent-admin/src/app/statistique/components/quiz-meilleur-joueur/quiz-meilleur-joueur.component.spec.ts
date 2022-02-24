import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMeilleurJoueurComponent } from './quiz-meilleur-joueur.component';

describe('QuizMeilleurJoueurComponent', () => {
  let component: QuizMeilleurJoueurComponent;
  let fixture: ComponentFixture<QuizMeilleurJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizMeilleurJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizMeilleurJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
