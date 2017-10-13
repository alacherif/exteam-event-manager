import { Component, Input } from '@angular/core';

import { EventObj } from '../shared/event/EventObj';

@Component({
  selector: 'events-list',
  templateUrl: './eventList.component.html',
  styleUrls: ['./eventList.component.css']
})
export class EventsListComponent {
  	title = 'Liste des Matches';
    eventsList: EventObj[] = [
			{
				"id": "59df3f6679659c292e195328",
				"host": {
					"id": "59df3f66da3bb1beef60f33b",
					"name": "Long",
					"path": "http://placehold.it/32x32"
				},
				"guest": {
					"id": "59df3f66c743418ae4625269",
					"name": "Allen",
					"path": "http://placehold.it/32x32"
				},
				"nbrePlaces": 4,
				"nbreResa": 3,
				"date": "Sat Mar 27 1971 12:55:36 GMT+0100 (Paris, Madrid)"
			},
			{
				"id": "59df3f66932a5388ab039bd1",
				"host": {
					"id": "59df3f66e0a8c7d4fc6a4f71",
					"name": "Snow",
					"path": "http://placehold.it/32x32"
				},
				"guest": {
					"id": "59df3f664cc120838f0d996c",
					"name": "May",
					"path": "http://placehold.it/32x32"
				},
				"nbrePlaces": 4,
				"nbreResa": 3,
				"date": "Thu Apr 05 1973 09:36:32 GMT+0200 (Paris, Madrid (heure d’été))"
			},
			{
				"id": "59df3f6694d66c520d155a45",
				"host": {
					"id": "59df3f66b5fa27f1d8cf6362",
					"name": "Ferrell",
					"path": "http://placehold.it/32x32"
				},
				"guest": {
					"id": "59df3f66bf74b644948ef3da",
					"name": "Blankenship",
					"path": "http://placehold.it/32x32"
				},
				"nbrePlaces": 4,
				"nbreResa": 3,
				"date": "Mon May 31 1976 04:31:07 GMT+0200 (Paris, Madrid (heure d’été))"
			},
			{
				"id": "59df3f66c141d1529eef747e",
				"host": {
					"id": "59df3f665daa8b92e37e4e91",
					"name": "Norton",
					"path": "http://placehold.it/32x32"
				},
				"guest": {
					"id": "59df3f665cd39a1ce6521634",
					"name": "Greene",
					"path": "http://placehold.it/32x32"
				},
				"nbrePlaces": 4,
				"nbreResa": 3,
				"date": "Wed May 27 1987 02:53:53 GMT+0200 (Paris, Madrid (heure d’été))"
			},
			{
				"id": "59df3f6665debe3a0a6a9ef2",
				"host": {
					"id": "59df3f6609f272fa9d663670",
					"name": "Farley",
					"path": "http://placehold.it/32x32"
				},
				"guest": {
					"id": "59df3f66cfb9a0c05a6c6725",
					"name": "Leonard",
					"path": "http://placehold.it/32x32"
				},
				"nbrePlaces": 4,
				"nbreResa": 3,
				"date": "Sat Apr 05 2014 04:18:05 GMT+0200 (Paris, Madrid (heure d’été))"
			}
	];
}