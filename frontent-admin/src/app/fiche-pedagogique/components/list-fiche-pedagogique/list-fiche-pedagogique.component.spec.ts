import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFichePedagogiqueComponent } from './list-fiche-pedagogique.component';

describe('ListFichePedagogiqueComponent', () => {
  let component: ListFichePedagogiqueComponent;
  let fixture: ComponentFixture<ListFichePedagogiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFichePedagogiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFichePedagogiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
