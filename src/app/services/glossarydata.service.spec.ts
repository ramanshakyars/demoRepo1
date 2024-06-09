import { TestBed } from '@angular/core/testing';

import { GlossarydataService } from './glossarydata.service';

describe('GlossarydataService', () => {
  let service: GlossarydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlossarydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
