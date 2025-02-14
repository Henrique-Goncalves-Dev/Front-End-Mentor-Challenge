import { TestBed } from '@angular/core/testing';

import { FormletterService } from './formletter.service';

describe('FormletterService', () => {
  let service: FormletterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormletterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
