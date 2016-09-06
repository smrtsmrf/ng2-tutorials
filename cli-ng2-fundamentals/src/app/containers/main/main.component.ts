import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../ui';
// import { NotesComponent } from '../';
import { NotesComponent } from '../notes/notes.component';

@Component({
  selector: 'main-container',
    templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  directives: [
  	NavbarComponent,
  	NotesComponent
  ]

})
export class MainComponent {

  constructor() { }

 

}
