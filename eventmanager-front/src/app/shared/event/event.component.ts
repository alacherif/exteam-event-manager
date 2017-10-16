import { Component,Input, OnInit } from '@angular/core';

import { ITeam } from '../team'
import { EventObj } from './EventObj';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector : 'event-component',
    templateUrl : './event.component.html',
    styleUrls :  ['./event.component.css']
})
export class EventComponent implements OnInit{
    @Input('eventObj') data: EventObj;
    isBackOffice: boolean;
    routerLinkValue: string;

    constructor(private activatedRoute: ActivatedRoute) {}
    
    ngOnInit() {
        this.isBackOffice = this.activatedRoute.snapshot.url[0].path === 'eventsList' ? false : true;
        this.routerLinkValue =  this.isBackOffice ? 'editEvent' : 'registerEvent'
    }
}

