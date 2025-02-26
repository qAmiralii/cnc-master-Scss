import { TestBed } from '@angular/core/testing';

import { TestCounterService } from './test-counter.service';

describe('TestCounterService', () => {
  let service: TestCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
