import { TestBed } from '@angular/core/testing';

import { CncWoodService } from './cnc-wood.service';

describe('CncWoodService', () => {
  let service: CncWoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CncWoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
