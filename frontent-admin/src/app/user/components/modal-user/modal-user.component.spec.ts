import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from "@angular/common/http";
import { ConfirmationDialogService } from "../../../ui/confirmation-dialog/confirmation-dialog.service";
import { ModalUserComponent } from './modal-user.component';
import { ListUserComponent } from "../list-user/list-user.component";

describe('ModalUserComponent', () => {
  let component: ModalUserComponent;
  let fixture: ComponentFixture<ModalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ ModalUserComponent ],
      providers: [
        ConfirmationDialogService,
        ListUserComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
