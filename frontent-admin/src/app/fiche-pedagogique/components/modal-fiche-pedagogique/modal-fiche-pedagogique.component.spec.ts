import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFichePedagogiqueComponent } from './modal-fiche-pedagogique.component';

describe('ModalFichePedagogiqueComponent', () => {
  let component: ModalFichePedagogiqueComponent;
  let fixture: ComponentFixture<ModalFichePedagogiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFichePedagogiqueComponent ]
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
