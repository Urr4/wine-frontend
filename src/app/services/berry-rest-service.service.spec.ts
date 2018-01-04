import { TestBed, inject } from '@angular/core/testing';

import { BerryRestServiceService } from './berry-rest-service.service';

describe('BerryRestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BerryRestServiceService]
    });
  });

  it('should be created', inject([BerryRestServiceService], (service: BerryRestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
