import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from "@angular/common/http";
import { ConfirmationDialogService } from "../../../ui/confirmation-dialog/confirmation-dialog.service";
import { CommandeChiffreAfffaireComponent } from './commande-chiffre-afffaire.component';

describe('CommandeChiffreAfffaireComponent', () => {
  let component: CommandeChiffreAfffaireComponent;
  let fixture: ComponentFixture<CommandeChiffreAfffaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ CommandeChiffreAfffaireComponent ],
      providers: [
        ConfirmationDialogService
      ]
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
