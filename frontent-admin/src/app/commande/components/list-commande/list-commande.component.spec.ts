import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommandeComponent } from './list-commande.component';

describe('ListCommandeComponent', () => {
  let component: ListCommandeComponent;
  let fixture: ComponentFixture<ListCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
