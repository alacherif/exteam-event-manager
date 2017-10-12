import { Component } from '@angular/core';

import { IEvent } from './event';

@Component({
  selector: 'events-list',
  templateUrl: './eventList.component.html',
  styleUrls: ['./eventList.component.css']
})
export class EventsListComponent {
	title = 'Liste des Matches';
	eventsList: IEvent[] = [
	  {
	    id:2,
	    path: "http://placehold.it/150x150",
	    host: "Clemons",
	    guest: "Gonzalez",
	    nbrePlaces: 4,
	    date: "Tue Apr 05 2016 19:47:45 GMT+0200 (Paris, Madrid (heure d’été))"
	  },
	  {
	    "id":5,
	    "path": "http://placehold.it/150x150",
	    "host": "Jayne",
	    "guest": "Mccarthy",
	    "nbrePlaces": 4,
	    "date": "Wed Feb 27 1974 03:12:34 GMT+0100 (Paris, Madrid)"
	  },
	  {
	    "id":6,
	    "path": "http://placehold.it/150x150",
	    "host": "Virginia",
	    "guest": "Rodriguez",
	    "nbrePlaces": 4,
	    "date": "Fri Jan 03 1997 21:03:00 GMT+0100 (Paris, Madrid)"
	  },
	  {
	    "id":9,
	    "path": "http://placehold.it/150x150",
	    "host": "Wilder",
	    "guest": "Delacruz",
	    "nbrePlaces": 4,
	    "date": "Wed Sep 25 1996 18:56:10 GMT+0200 (Paris, Madrid (heure d’été))"
	  },
	  {
	    "id":7,
	    "path": "http://placehold.it/150x150",
	    "host": "Peck",
	    "guest": "Christensen",
	    "nbrePlaces": 4,
	    "date": "Mon Jan 13 1986 12:31:48 GMT+0100 (Paris, Madrid)"
	  },
	  {
	    "id":12,
	    "path": "http://placehold.it/150x150",
	    "host": "Cynthia",
	    "guest": "Chen",
	    "nbrePlaces": 4,
	    "date": "Wed Dec 16 2009 18:00:16 GMT+0100 (Paris, Madrid)"
	  }
	];
}