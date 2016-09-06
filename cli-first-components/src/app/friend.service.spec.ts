/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FriendService } from './friend.service';

describe('Service: Friend', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendService]
    });
  });

  it('should ...', inject([FriendService], (service: FriendService) => {
    expect(service).toBeTruthy();
  }));
});
