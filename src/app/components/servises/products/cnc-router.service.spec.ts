import { TestBed } from '@angular/core/testing';

import { CncRouterService } from './cnc-router.service';

describe('CncRouterService', () => {
  let service: CncRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CncRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
