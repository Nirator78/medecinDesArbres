import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConferenceComponent } from './modal-conference.component';

describe('ModalConferenceComponent', () => {
  let component: ModalConferenceComponent;
  let fixture: ComponentFixture<ModalConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
