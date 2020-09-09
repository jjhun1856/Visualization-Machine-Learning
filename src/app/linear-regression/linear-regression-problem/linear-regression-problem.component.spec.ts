import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearRegressionProblemComponent } from './linear-regression-problem.component';

describe('LinearRegressionProblemComponent', () => {
  let component: LinearRegressionProblemComponent;
  let fixture: ComponentFixture<LinearRegressionProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearRegressionProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearRegressionProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
