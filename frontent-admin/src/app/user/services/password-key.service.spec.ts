import { TestBed } from '@angular/core/testing';

import { PasswordKeyService } from './password-key.service';

describe('PasswordKeyService', () => {
  let service: PasswordKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
