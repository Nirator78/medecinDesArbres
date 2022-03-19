import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalConferenceComponent } from './modal-conference.component';
import { ListConferenceComponent } from "../list-conference/list-conference.component";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from "@angular/common/http";
import { ConfirmationDialogService } from "../../../ui/confirmation-dialog/confirmation-dialog.service";

describe('ModalConferenceComponent', () => {
  let component: ModalConferenceComponent;
  let fixture: ComponentFixture<ModalConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ ModalConferenceComponent ],
      providers: [
        ConfirmationDialogService,
        ListConferenceComponent
      ]
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
