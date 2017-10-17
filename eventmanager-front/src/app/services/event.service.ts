import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { EventObj } from '../shared/event/EventObj';

@Injectable()
export class EventService{
    private eventsUrl = 'http://localhost:3000/events';
  
    constructor(private http: HttpClient){}

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
