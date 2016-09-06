import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {
	// attributes to pass into note-card element
	@Input()
	note = {}

	// this creates a new DOM event that we can use in () in the note card elem
	@Output() 
	checked = new EventEmitter();

	showCheck: boolean = false;

	toggle() {
		this.showCheck = !this.showCheck;
	}


	onChecked() {
		this.checked.next(this.note);
	}
  constructor() { }



}
