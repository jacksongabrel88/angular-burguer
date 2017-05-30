import { TestBed, inject } from '@angular/core/testing';

import { HamburgeresService } from './hamburgeres.service';

describe('HamburgeresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HamburgeresService]
    });
  });

  it('should be created', inject([HamburgeresService], (service: HamburgeresService) => {
    expect(service).toBeTruthy();
  }));
});
