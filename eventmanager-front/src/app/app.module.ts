import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EventsListComponent } from './eventsList/eventList.component';
import { EventComponent } from './shared/event/event.component';
import { RegisterEventComponent } from './forms/registerEvent.component';
import { AppRoutingModule } from './app-routing.module';
import { EventService } from './services/event.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventComponent,
    RegisterEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    NoopAnimationsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
