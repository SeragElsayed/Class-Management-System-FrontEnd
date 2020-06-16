import { TestBed } from '@angular/core/testing';

import { ExploreProjectService } from './explore-project.service';

describe('ExploreProjectService', () => {
  let service: ExploreProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploreProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
