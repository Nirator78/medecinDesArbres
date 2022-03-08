import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeChiffreAfffaireComponent } from './commande-chiffre-afffaire.component';

describe('CommandeChiffreAfffaireComponent', () => {
  let component: CommandeChiffreAfffaireComponent;
  let fixture: ComponentFixture<CommandeChiffreAfffaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeChiffreAfffaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeChiffreAfffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
