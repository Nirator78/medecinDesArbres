import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPanierComponent } from './modal-panier.component';

describe('ModalPanierComponent', () => {
  let component: ModalPanierComponent;
  let fixture: ComponentFixture<ModalPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPanierComponent ]
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
