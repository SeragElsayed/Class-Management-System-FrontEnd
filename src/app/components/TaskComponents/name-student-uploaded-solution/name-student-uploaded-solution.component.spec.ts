import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameStudentUploadedSolutionComponent } from './name-student-uploaded-solution.component';

describe('NameStudentUploadedSolutionComponent', () => {
  let component: NameStudentUploadedSolutionComponent;
  let fixture: ComponentFixture<NameStudentUploadedSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameStudentUploadedSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameStudentUploadedSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
