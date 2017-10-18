import { Component } from '@angular/core';

import { EventObj } from '../shared/event/EventObj';
import { EventService } from '../services/event.service';

@Component({
    selector: 'event-manager',
    templateUrl: 'event-manager.component.html'
})
export class EventManagerComponent{
    title : string = 'Gestion des événements'; 
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
