import { TestBed } from '@angular/core/testing';

import { FetchWrapperService } from './fetch-wrapper.service';

describe('FetchWrapperService', () => {
  let service: FetchWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
