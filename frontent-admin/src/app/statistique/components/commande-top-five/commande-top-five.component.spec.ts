import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeTopFiveComponent } from './commande-top-five.component';

describe('CommandeTopFiveComponent', () => {
  let component: CommandeTopFiveComponent;
  let fixture: ComponentFixture<CommandeTopFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeTopFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeTopFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
