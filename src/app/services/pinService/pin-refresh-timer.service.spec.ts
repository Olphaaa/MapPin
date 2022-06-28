import { TestBed } from '@angular/core/testing';

import { PinRefreshTimerService } from './pin-refresh-timer.service';

describe('PinRefreshTimerService', () => {
  let service: PinRefreshTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinRefreshTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
