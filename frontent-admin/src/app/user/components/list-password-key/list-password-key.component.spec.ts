import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPasswordKeyComponent } from './list-password-key.component';

describe('ListPasswordKeyComponent', () => {
  let component: ListPasswordKeyComponent;
  let fixture: ComponentFixture<ListPasswordKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPasswordKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPasswordKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
