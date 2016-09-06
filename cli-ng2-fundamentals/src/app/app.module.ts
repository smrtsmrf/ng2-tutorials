import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NotesComponent } from './containers/notes/notes.component';
import { NoteCardComponent } from './ui/note-card/note-card.component';
import { AuthComponent } from './containers/auth/auth.component';
import { ColorPickerComponent } from './ui/color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotesComponent,
    NoteCardComponent,
    AuthComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

