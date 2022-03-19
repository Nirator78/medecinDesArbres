import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";

import { PasswordKeyService } from './password-key.service';

describe('PasswordKeyService', () => {
  let service: PasswordKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(PasswordKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
