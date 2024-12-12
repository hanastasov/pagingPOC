import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Northwind1Service } from './northwind1.service';

describe('Northwind1Service', () => {
  let service: Northwind1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(Northwind1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
