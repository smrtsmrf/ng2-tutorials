
import { Injectable } from '@angular/core';
import { Note } from '../store';
import { StoreHelperService } from './store-helper.service';
import { ApiService } from './api.service';
import 'rxjs';

@Injectable()
export class NoteService {

  path: string = '/notes';
  constructor(private apiService: ApiService, private storeHelper:StoreHelperService) {}

  createNote(note: Note) {
    return this.apiService.post(this.path, note)
    .do(savedNote => this.storeHelper.add('notes', savedNote))
  }

  getNotes() {
    return this.apiService.get(this.path)
    .do(res => this.storeHelper.update('notes', res.data));
  }

  completeNote(note: Note) {
    return this.apiService.delete(`${this.path}/${note.id}`)
    .do(res => this.storeHelper.findAndDelete('notes', res.id));
  }
}