import { Component, OnInit } from '@angular/core';

import { IEvent } from './event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'events-list',
  templateUrl: './eventList.component.html',
	styleUrls: ['./eventList.component.css'],
	providers: [EventService]
})
export class EventsListComponent implements OnInit{
	title = 'Liste des Matches';
	eventsList: IEvent[];

	constructor(private eventService: EventService){}

	getEvents(): void{
		this.eventService.getEventsSlowly().then(events => this.eventsList = events);
		//this.eventService.getEvents().then(events => this.eventsList = events);
	}

	ngOnInit(): void{
		this.getEvents();
	}
}