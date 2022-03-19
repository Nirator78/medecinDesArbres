import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from "@angular/common/http";
import { ConfirmationDialogService } from "../../../ui/confirmation-dialog/confirmation-dialog.service";
import { ModalPanierComponent } from './modal-panier.component';
import { ListPanierComponent } from "../list-panier/list-panier.component";

describe('ModalPanierComponent', () => {
  let component: ModalPanierComponent;
  let fixture: ComponentFixture<ModalPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ ModalPanierComponent ],
      providers: [
        ConfirmationDialogService,
        ListPanierComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
