import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from "@angular/common/http";
import { ModalArticleComponent } from './modal-article.component';
import { ListArticleComponent } from "../list-article/list-article.component";
import { ConfirmationDialogService } from "../../../ui/confirmation-dialog/confirmation-dialog.service";

describe('ModalArticleComponent', () => {
  let component: ModalArticleComponent;
  let fixture: ComponentFixture<ModalArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ ModalArticleComponent ],
      providers: [
        ListArticleComponent,
        ConfirmationDialogService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
