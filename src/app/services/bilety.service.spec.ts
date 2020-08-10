import { TestBed } from '@angular/core/testing';

import { BiletyService } from './bilety.service';

describe('BiletService', () => {
  let service: BiletyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiletyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
