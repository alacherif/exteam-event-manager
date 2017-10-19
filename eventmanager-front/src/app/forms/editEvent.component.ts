import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../services/event.service';
import { EventObj } from '../shared/event/EventObj';

@Component({
    selector: 'edit-event',
    templateUrl: 'editEvent.component.html'
})
export class EditEventComponent{
    formTitle: string = 'Modification de l\'événement';
    eventModel: EventObj ;

    constructor(private eventService: EventService, private activatedRoute :ActivatedRoute){}

    getEventById(id : string) : void{
        this.eventModel= this.eventService.getEventById(id);
    }

    ngOnInit(){
        this.activatedRoute.params.subscribe((params: EventObj) => {
            let Id :string = params['id'];
            this.getEventById(Id);
        });   
    }
    
}
