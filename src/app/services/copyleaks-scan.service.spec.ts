import { TestBed } from '@angular/core/testing';

import { CopyleaksScanService } from './copyleaks-scan.service';

describe('CopyleaksScanService', () => {
  let service: CopyleaksScanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopyleaksScanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
