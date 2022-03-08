import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParcoursEcoloComponent } from './list-parcours-ecolo.component';

describe('ListParcoursEcoloComponent', () => {
  let component: ListParcoursEcoloComponent;
  let fixture: ComponentFixture<ListParcoursEcoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListParcoursEcoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParcoursEcoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
