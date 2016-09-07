import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Sidebar } from './sidebar/sidebar.component';
import { LocationHeader } from './location-header/location-header.component';
import { ScheduleHeader } from './schedule-header/schedule-header.component';
import { CalendarHeader } from './calendar-header/calendar-header.component';

import { MusicService } from './music.service';


@NgModule({
  declarations: [
    AppComponent,
    Sidebar,
    LocationHeader,
    ScheduleHeader,
    CalendarHeader
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MusicService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
