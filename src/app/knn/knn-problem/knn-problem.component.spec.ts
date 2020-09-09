import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnnProblemComponent } from './knn-problem.component';

describe('KnnProblemComponent', () => {
  let component: KnnProblemComponent;
  let fixture: ComponentFixture<KnnProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnnProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnnProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
