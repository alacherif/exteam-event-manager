import { Injectable } from '@angular/core';

import { EVENTS } from '../api/mock-events';
import { EventObj } from '../shared/event/EventObj';

@Injectable()
export class EventService{
    getEvents(): Promise<EventObj[]>{
        return Promise.resolve(EVENTS);
    }

    getEventsSlowly(): Promise<EventObj[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getEvents()), 2000);
        });
    }

    getEventById(id:string) : EventObj{
        var result= EVENTS.find(ev=> ev.id === id);
        //console.log(result);
        return result;
    }
}
