import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConferenceComponent } from './list-conference.component';

describe('ListConferenceComponent', () => {
  let component: ListConferenceComponent;
  let fixture: ComponentFixture<ListConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
