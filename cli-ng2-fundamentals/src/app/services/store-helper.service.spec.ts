/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoreHelperService } from './store-helper.service';

describe('Service: StoreHelper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreHelperService]
    });
  });

  it('should ...', inject([StoreHelperService], (service: StoreHelperService) => {
    expect(service).toBeTruthy();
  }));
});
