import { TestBed } from '@angular/core/testing';

import { CustDataService } from './cust-data.service';

describe('CustDataService', () => {
  let service: CustDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
