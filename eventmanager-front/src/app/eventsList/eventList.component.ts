import { Component, OnInit, Input } from '@angular/core';

import { EventObj } from '../shared/event/EventObj';
import { EventService } from '../services/event.service';

@Component({
	selector: 'events-list',
	templateUrl: './eventList.component.html',
	styleUrls: ['./eventList.component.css']
})
export class EventsListComponent implements OnInit{
	title = 'Liste des Matches';
	eventsList: EventObj[];

	constructor(private eventService: EventService){}

	getEvents(): void{
		this.eventService.getEvents()
			.subscribe(
				events => this.eventsList = events,
				error => console.log(error)
			);
	}

	ngOnInit(): void{
		this.getEvents();
	}
}