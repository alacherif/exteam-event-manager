import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, 
         MatFormFieldModule, 
         MatSelectModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EventsListComponent } from './eventsList/eventList.component';
import { EventComponent } from './shared/event/event.component';
import { RegisterEventComponent } from './forms/registerEvent.component';
import { AppRoutingModule } from './app-routing.module';
import { EventService } from './services/event.service';
import { EventManagerComponent } from './eventManager/eventManager.component';
import { EditEventComponent } from './forms/editEvent.component';
import { PhoneNumberDirective } from './shared/phonenumber.directive';
import { AlphaDirective } from './shared/alphabetique.directive'

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventComponent,
    RegisterEventComponent,
    EventManagerComponent,
    EditEventComponent,
    PhoneNumberDirective,
    AlphaDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
