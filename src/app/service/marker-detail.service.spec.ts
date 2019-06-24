import { TestBed } from '@angular/core/testing';

import { MarkerDetailService } from './marker-detail.service';

describe('MarkerDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkerDetailService = TestBed.get(MarkerDetailService);
    expect(service).toBeTruthy();
  });
});
