import { TestBed } from '@angular/core/testing';

import { MealsapiService } from './mealsapi.service';

describe('MealsapiService', () => {
  let service: MealsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
