/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SvcService } from './svc.service';

describe('Service: Svc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvcService]
    });
  });

  it('should ...', inject([SvcService], (service: SvcService) => {
    expect(service).toBeTruthy();
  }));
});
