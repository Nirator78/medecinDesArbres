import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from "@angular/common/http";
import { ConfirmationDialogService } from "../../../ui/confirmation-dialog/confirmation-dialog.service";
import { ModalFichePedagogiqueComponent } from './modal-fiche-pedagogique.component';
import { ListFichePedagogiqueComponent } from "../list-fiche-pedagogique/list-fiche-pedagogique.component";

describe('ModalFichePedagogiqueComponent', () => {
  let component: ModalFichePedagogiqueComponent;
  let fixture: ComponentFixture<ModalFichePedagogiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ ModalFichePedagogiqueComponent ],
      providers: [
        ConfirmationDialogService,
        ListFichePedagogiqueComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFichePedagogiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
