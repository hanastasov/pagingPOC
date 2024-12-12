import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ChillGamingService } from './chill-gaming.service';

describe('ChillGamingService', () => {
  let service: ChillGamingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ChillGamingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
