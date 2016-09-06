import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './containers';
import { NavbarComponent } from './ui';
import { NotesComponent } from './containers';
import { NoteCardComponent } from './ui';
import { AboutComponent } from './containers';
import { AuthComponent } from './containers';
import { ColorPickerComponent } from './ui';

import { ApiService, NoteService, AuthService, StoreHelperService } from './services';
import { Store } from './store'

// import { providers } from './'
// console.log(providers)
// console.log([...providers])

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,  
    MainComponent,
    AboutComponent,    
    NavbarComponent,
    NotesComponent,
    NoteCardComponent,
    AuthComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    // ...providers
    ApiService, 
    NoteService,
    AuthService,
    StoreHelperService,
    Store
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }

