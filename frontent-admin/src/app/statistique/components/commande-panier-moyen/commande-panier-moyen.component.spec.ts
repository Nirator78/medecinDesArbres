import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandePanierMoyenComponent } from './commande-panier-moyen.component';

describe('CommandePanierMoyenComponent', () => {
  let component: CommandePanierMoyenComponent;
  let fixture: ComponentFixture<CommandePanierMoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandePanierMoyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandePanierMoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
