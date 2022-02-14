import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPanierComponent } from './list-panier.component';

describe('ListPanierComponent', () => {
  let component: ListPanierComponent;
  let fixture: ComponentFixture<ListPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
