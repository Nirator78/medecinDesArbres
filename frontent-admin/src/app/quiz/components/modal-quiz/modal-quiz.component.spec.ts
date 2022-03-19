import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from "@angular/common/http";
import { ConfirmationDialogService } from "../../../ui/confirmation-dialog/confirmation-dialog.service";
import { ModalQuizComponent } from './modal-quiz.component';
import { ListQuizComponent } from "../list-quiz/list-quiz.component";

describe('ModalQuizComponent', () => {
  let component: ModalQuizComponent;
  let fixture: ComponentFixture<ModalQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ ModalQuizComponent ],
      providers: [
        ConfirmationDialogService,
        ListQuizComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
