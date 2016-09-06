import { Component } from '@angular/core';
import { MainComponent } from './containers';

@Component({
  selector: 'app-root',
  directives: [MainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
