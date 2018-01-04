import { TestBed, inject } from '@angular/core/testing';

import { WineRestServiceService } from './wine-rest-service.service';

describe('WineRestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WineRestServiceService]
    });
  });

  it('should be created', inject([WineRestServiceService], (service: WineRestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
