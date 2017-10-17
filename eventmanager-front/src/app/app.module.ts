import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EventsListComponent } from './eventsList/eventList.component';
import { EventComponent } from './shared/event/event.component';
import { RegisterEventComponent } from './forms/registerEvent.component';
import { AppRoutingModule } from './app-routing.module';
import { EventService } from './services/event.service';
import { EventManagerComponent } from './eventManager/eventManager.component';
import { EditEventComponent } from './forms/editEvent.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventComponent,
    RegisterEventComponent,
    EventManagerComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
