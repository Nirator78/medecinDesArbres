import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalArticleComponent } from './modal-article.component';

describe('ModalArticleComponent', () => {
  let component: ModalArticleComponent;
  let fixture: ComponentFixture<ModalArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalArticleComponent ]
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
