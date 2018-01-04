import { TestBed, inject } from '@angular/core/testing';

import { OrderRestServiceService } from './order-rest-service.service';

describe('OrderRestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderRestServiceService]
    });
  });

  it('should be created', inject([OrderRestServiceService], (service: OrderRestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
