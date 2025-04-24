import { TestBed } from '@angular/core/testing';

import { UnauthedGuardService } from './unauthed.guard.service';

describe('UnauthedGuardService', () => {
  let service: UnauthedGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnauthedGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
