import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { ColorPickerComponent } from '../';
import { ColorPickerComponent } from '../color-picker/color-picker.component';

@Component({
  selector: 'note-creator',
  directives: [ColorPickerComponent],
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})
export class NoteCreatorComponent {
	@Output()
	// new event which can be used in () in note-creator element
	makeNote = new EventEmitter();
	colors: Array<string> = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', 'white'];
	newNote = {
		title: '',
		value: '',
		color: 'white'
	};
	fullForm:boolean = false;	

	// tied to expression in note creator html. this is on(whatever the output is)
	onMakeNote() {
		const {title, value, color} = this.newNote;

		if (title && value) {
			this.makeNote.next({title, value, color});
			this.reset();
		}
	}

	reset() {
		this.newNote = {
			title: '',
			value: '',
			color: 'white'
		}
	}

	toggle(value:boolean) {
		this.fullForm = value;
	}

	onColorSelect(color:string) {
		this.newNote.color = color;
	}

  constructor() { }

}