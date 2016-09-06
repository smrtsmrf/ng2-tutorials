import { Component } from '@angular/core';
import { FriendComponent } from './friend/friend.component';

@Component({
  selector: 'app-root',
  directives: [FriendComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentName: string = 'AppComponent';
}
