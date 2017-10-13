import { Component,Input } from '@angular/core';

import {ITeam} from '../team'
import { EventObj } from './EventObj';

@Component({
    selector : 'event-component',
    templateUrl : './event.component.html',
    styleUrls :  ['./event.component.css']
})
export class EventComponent{
    @Input('eventObj') data: EventObj;
}

