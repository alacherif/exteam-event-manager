import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsListComponent } from './eventsList/eventList.component';
import { RegisterEventComponent } from './forms/registerEvent.component';
import { EventManagerComponent } from './forms/eventManager.component';
import { EditEventComponent } from './forms/editEvent.component';

const routes: Routes = [
    { path: '', redirectTo: '/eventsList', pathMatch: 'full' },
    { path: 'eventsList',  component: EventsListComponent },
    { path: 'registerEvent/:id', component: RegisterEventComponent},
    { path: 'eventManager', component: EventManagerComponent},
    { path: 'editEvent/:id', component: EditEventComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}