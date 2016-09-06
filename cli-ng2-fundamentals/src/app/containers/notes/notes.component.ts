import { Component, OnInit } from '@angular/core';
import { NoteCardComponent, NoteCreatorComponent } from '../../ui';

@Component({
  selector: 'notes-container',
  directives: [
  	NoteCardComponent,
  	NoteCreatorComponent
  ],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent{
	notes = [
		{title: 'Chores', value: 'Dont forget to clean up', color: 'lightblue'},
		{title: 'Food', value: 'make dinner', color: 'seagreen'},
		{title: 'todo', value: 'think about birthday', color: 'coral'}
	]

	onNoteChecked(note, idx) {
		this.notes.splice(idx, 1)
	}

	// this matches the expression in notes.component.html where note-creator is used
	onCreateNote(note) {
		this.notes.push(note);
	}

  constructor() { }



}
