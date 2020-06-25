import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSolutionsListComponent } from './student-solutions-list.component';

describe('StudentSolutionsListComponent', () => {
  let component: StudentSolutionsListComponent;
  let fixture: ComponentFixture<StudentSolutionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSolutionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSolutionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
