import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalParcoursEcoloComponent } from './modal-parcours-ecolo.component';

describe('ModalParcoursEcoloComponent', () => {
  let component: ModalParcoursEcoloComponent;
  let fixture: ComponentFixture<ModalParcoursEcoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalParcoursEcoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalParcoursEcoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
