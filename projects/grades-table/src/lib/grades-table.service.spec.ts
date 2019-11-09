import { TestBed } from '@angular/core/testing';

import { GradesTableService } from './grades-table.service';

describe('GradesTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GradesTableService = TestBed.get(GradesTableService);
    expect(service).toBeTruthy();
  });
});
