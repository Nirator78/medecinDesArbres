import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from "@angular/common/http";
import { ConfirmationDialogService } from "../../../ui/confirmation-dialog/confirmation-dialog.service";
import { ModalCommandeComponent } from './modal-commande.component';
import { ListCommandeComponent } from "../list-commande/list-commande.component";

describe('ModalCommandeComponent', () => {
  let component: ModalCommandeComponent;
  let fixture: ComponentFixture<ModalCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ ModalCommandeComponent ],
      providers: [
        ListCommandeComponent,
        ConfirmationDialogService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
