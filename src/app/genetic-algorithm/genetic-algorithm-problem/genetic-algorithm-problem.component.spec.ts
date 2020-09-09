import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneticAlgorithmProblemComponent } from './genetic-algorithm-problem.component';

describe('GeneticAlgorithmProblemComponent', () => {
  let component: GeneticAlgorithmProblemComponent;
  let fixture: ComponentFixture<GeneticAlgorithmProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneticAlgorithmProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneticAlgorithmProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
