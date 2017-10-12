import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './eventsList/eventList.component';
import {EventComponent } from './shared/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
