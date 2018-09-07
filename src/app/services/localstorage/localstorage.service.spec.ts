import { TestBed, inject } from '@angular/core/testing';

import { LocalstorageService } from './api.service';

describe('LocalstorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalstorageService]
    });
  });

  it('should be created', inject([LocalstorageService], (service: LocalstorageService) => {
    expect(service).toBeTruthy();
  }));
});
