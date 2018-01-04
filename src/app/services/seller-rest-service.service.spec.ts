import { TestBed, inject } from '@angular/core/testing';

import { SellerRestServiceService } from './seller-rest-service.service';

describe('SellerRestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerRestServiceService]
    });
  });

  it('should be created', inject([SellerRestServiceService], (service: SellerRestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
