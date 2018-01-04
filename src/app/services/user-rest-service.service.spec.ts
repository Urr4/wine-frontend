import { TestBed, inject } from '@angular/core/testing';

import { UserRestServiceService } from './user-rest-service.service';

describe('UserRestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRestServiceService]
    });
  });

  it('should be created', inject([UserRestServiceService], (service: UserRestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
