import { TestBed } from '@angular/core/testing';

import { RouteServiceService } from './route-service.service';

describe('RouteServiceService', () => {
  let service: RouteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
