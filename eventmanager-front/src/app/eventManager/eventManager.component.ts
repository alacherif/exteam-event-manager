import { Component } from '@angular/core';

import { EventObj } from '../shared/event/EventObj';
import { EventService } from '../services/event.service';

@Component({
    selector: 'event-manager',
    templateUrl: 'event-manager.component.html'
})
export class EventManagerComponent{
    title : string = 'Gestions des événements'; 
    eventsList: EventObj[];

    constructor(private eventService: EventService){}
    
    getEvents(): void{
        this.eventService.getEventsSlowly().then(events => this.eventsList = events);
    }
    
    ngOnInit(): void{
        this.getEvents();
    }
}
