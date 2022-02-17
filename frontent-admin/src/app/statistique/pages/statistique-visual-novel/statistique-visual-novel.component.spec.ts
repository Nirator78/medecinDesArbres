import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueVisualNovelComponent } from './statistique-visual-novel.component';

describe('StatistiqueVisualNovelComponent', () => {
  let component: StatistiqueVisualNovelComponent;
  let fixture: ComponentFixture<StatistiqueVisualNovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueVisualNovelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueVisualNovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
