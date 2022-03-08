import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueCommandeComponent } from './statistique-commande.component';

describe('StatistiqueCommandeComponent', () => {
  let component: StatistiqueCommandeComponent;
  let fixture: ComponentFixture<StatistiqueCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
