import { Component } from '@angular/core';



@Component({
    selector: 'register-event',
    templateUrl: 'registerEvent.component.html',
})
export class RegisterEventComponent{
    formTitle: string = 'Veuillez remplir ce formulaire s\'il vous plait';
    commercial = [
        {id: 1,name:'Otmane'},
        {id: 2,name:'Said'},
        {id: 3,name:'Souad'},
        {id: 4,name:'Aziz'},
        {id: 5,name:'Alaa'},
        {id: 6,name:'Ali'}
    ];
    selectedValue = null;
}