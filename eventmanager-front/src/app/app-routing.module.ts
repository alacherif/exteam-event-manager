import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsListComponent } from './eventsList/eventList.component';
import { RegisterEventComponent } from './forms/registerEvent.component';

const routes: Routes = [
    { path: '', redirectTo: '/eventsList', pathMatch: 'full' },
    { path: 'eventsList',  component: EventsListComponent },
    { path: 'registerEvent/:id', component: RegisterEventComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}