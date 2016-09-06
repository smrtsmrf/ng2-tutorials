import { Component, OnInit, OnDestroy } from '@angular/core';
import { NoteCardComponent, NoteCreatorComponent } from '../../ui';
import { NoteService } from '../../services/note.service';
import { Store } from '../../store';
import 'rxjs/Rx';
import { StoreHelperService } from '../../services/store-helper.service';

@Component({
  selector: 'notes-container',
  directives: [
  	NoteCardComponent,
  	NoteCreatorComponent
  ],
  providers: [NoteService, Store, StoreHelperService],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnDestroy{
  notes = [];

  constructor(private noteService: NoteService, private store:Store) {
    	this.noteService.getNotes()
    		.subscribe();
	
	this.store.changes.pluck('notes')
		.subscribe((notes: any) =>  this.notes = notes);
  }

  onCreateNote(note) {
    	this.noteService.createNote(note)
    		.subscribe();
  }

  onNoteChecked(note) {
	this.noteService.completeNote(note)
    		.subscribe();

  }

  ngOnDestroy() {
  	console.log('destroyed')
  }
}
