import { TestBed } from '@angular/core/testing';

import { OprationsService } from './oprations.service';

describe('OprationsService', () => {
  let service: OprationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OprationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
