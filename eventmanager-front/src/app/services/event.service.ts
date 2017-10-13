import { Injectable } from '@angular/core';

import { EVENTS } from '../api/mock-events';
import { IEvent } from '../eventsList/event';

@Injectable()
export class EventService{
    getEvents(): Promise<IEvent[]>{
        return Promise.resolve(EVENTS);
    }

    getEventsSlowly(): Promise<IEvent[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getEvents()), 2000);
        });
    }
}
