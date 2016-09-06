import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friend',
  providers: [FriendService],
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {
	componentName: string = 'FriendComponent';
	friends: Array<any>;
    
  constructor(private friendService: FriendService) { 
  	this.friends = friendService.getFriends();
  }



}
