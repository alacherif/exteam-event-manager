import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise'; 

import { EVENTS } from '../api/mock-events';
import { EventObj } from '../shared/event/EventObj';

@Injectable()
export class EventService{
    private eventsUrl = 'http://localhost:3000/events';

    constructor(private http: Http){}

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
        let result= EVENTS.find(ev=> ev.id === id);
        return result;
    }
       
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
