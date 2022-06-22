import { TestBed } from '@angular/core/testing';

import { HttpServicePinsService } from './http-service-pins.service';

describe('HttpServicePinsService', () => {
  let service: HttpServicePinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServicePinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
