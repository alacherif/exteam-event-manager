import { Component } from '@angular/core';

import {ITeam} from '../team'

@Component({
    selector : 'event-component',
    templateUrl : './event.component.html',
    styleUrls :  ['./event.component.css']
})
export class EventComponent{
    id : string;
    date:string;
    nbrePlaces : number;
    nbreResa : number;
    host :ITeam;
    guest : ITeam ; 
}