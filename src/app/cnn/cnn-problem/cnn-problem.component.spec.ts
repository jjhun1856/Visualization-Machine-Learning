import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnnProblemComponent } from './cnn-problem.component';

describe('CnnProblemComponent', () => {
  let component: CnnProblemComponent;
  let fixture: ComponentFixture<CnnProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnnProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnnProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
