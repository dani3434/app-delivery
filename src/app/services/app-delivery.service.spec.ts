import { TestBed } from '@angular/core/testing';

import { AppDeliveryService } from './app-delivery.service';

describe('AppDeliveryService', () => {
  let service: AppDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
