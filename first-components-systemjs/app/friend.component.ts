import { Component } from '@angular/core'; 
import { FriendService } from './friend.service';

@Component({
    selector: 'my-friends',
    providers: [FriendService],
    styles: [`
     div { 
     background-color:#EFEFEF;
     margin-bottom:15px;
     padding:15px;
     border:1px solid #DDD;
     box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
    border-radius:3px;
  }
  h2 { 
    text-align: center;
  }
  `],
    template: `<h1>Hello from the {{ componentName }}!</h1><div *ngFor="let f of friends"><h3>Name: {{ f.name }}</h3><h4>Age: {{ f.age }}</h4>        </div>`
    
})

export class FriendComponent {
    componentName: string = 'FriendComponent';
    friends:Array<any>;

    // Inject FriendService and assign it to _friendService
    constructor(private _friendService: FriendService) {
        // Utilize .get request from app/friend.service.ts to populate friends object
        this.friends = _friendService.getFriends();
    }
}