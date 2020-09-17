import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneticAlgorithmComponent } from './genetic-algorithm.component';

describe('GeneticAlgorithmComponent', () => {
  let component: GeneticAlgorithmComponent;
  let fixture: ComponentFixture<GeneticAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneticAlgorithmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneticAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
