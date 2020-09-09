import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanProblemComponent } from './gan-problem.component';

describe('GanProblemComponent', () => {
  let component: GanProblemComponent;
  let fixture: ComponentFixture<GanProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
