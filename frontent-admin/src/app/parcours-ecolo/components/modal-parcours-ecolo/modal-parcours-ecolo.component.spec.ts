import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from "@angular/common/http";
import { ConfirmationDialogService } from "../../../ui/confirmation-dialog/confirmation-dialog.service";
import {ListParcoursEcoloComponent } from "../list-parcours-ecolo/list-parcours-ecolo.component";

import { ModalParcoursEcoloComponent } from './modal-parcours-ecolo.component';

describe('ModalParcoursEcoloComponent', () => {
  let component: ModalParcoursEcoloComponent;
  let fixture: ComponentFixture<ModalParcoursEcoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ ModalParcoursEcoloComponent ],
      providers: [
        ConfirmationDialogService,
        ListParcoursEcoloComponent
      ]
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
