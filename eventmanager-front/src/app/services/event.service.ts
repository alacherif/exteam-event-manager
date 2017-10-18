import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { EventObj } from '../shared/event/EventObj';

@Injectable()
export class EventService{
    private eventsUrl = 'http://localhost:3000/events';
    //private EVENTS: EventObj[];
  
    constructor(private http: HttpClient){}

    getEventById(id:string) : EventObj{
        //let result= this.EVENTS.find(ev=> ev.id === id);
        return {
            'id': '59df3f6679659c292e195328',
            'host': {
              'id': '59df3f66da3bb1beef60f33b',
              'name': 'Long',
              'path': 'http://placehold.it/32x32'
            },
            'guest': {
              'id': '59df3f66c743418ae4625269',
              'name': 'Allen',
              'path': 'http://placehold.it/32x32'
            },
            'nbrePlaces': 4,
            'nbreResa': 3,
            'date': 'Sat Mar 27 1971 12:55:36 GMT+0100 (Paris, Madrid)'
        };
    }

    getEvents(): Observable<EventObj[]> {
        return this.http.get<EventObj[]>(this.eventsUrl)
            .do(data => JSON.stringify(data))
            .catch(this.handleError);
    }
       
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
