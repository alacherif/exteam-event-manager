import { Component ,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input} from '@angular/core';

import { NG_VALIDATORS,Validator, Validators,AbstractControl,ValidatorFn, FormControl } from '@angular/forms';

import { User } from '../shared/User';

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
    user: User;
    submitted = false;
    
     onSubmit() { this.submitted = true; }

     entreprise = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
     fullname = new FormControl('', [Validators.required, Validators.minLength(6)]);
     email = new FormControl('', [Validators.required, Validators.email]);
     phone = new FormControl('', [Validators.required, Validators.maxLength(10)]);
     commercial_id = new FormControl('',[Validators.required]);
     
       getErrorMessageEntreprise() {

        return this.entreprise.hasError('required') ? 'Vous devez saisir le nom de votre entreprise ' :
        this.entreprise.hasError('minlength') ? 'le notre de votre socièté doit contenir 3 caractères mini' :
        this.entreprise.hasError('maxlength') ? 'le notre de votre socièté doit contenir 30 caractères maxi ' : '';
       }
       getErrorMessageFullname() {
        return this.fullname.hasError('required') ? 'Vous devez saisir votre nom complet ' :
        this.fullname.hasError('minlength') ? 'votre nom doit contenir 6 caractères mini' :
        this.fullname.hasError('maxlength') ? 'votre nom doit contenir 30 caractères maxi ' : '';
       }
       getErrorMessageEmail() {
       return  this.email.hasError('required') ? 'Vous devez saisir une adresse mail ' :
        this.email.hasError('email') ? 'email invalide' : '';
       }
       getErrorMessagePhone() {
        return this.phone.hasError('required') ? 'Vous devez saisir votre numéro de téléphone ' :
        this.phone.hasError('maxLength') ? 'le numéro de téléphone ne doit pas dépasser les 10 chiffres' : '';
       }
       getErrorMessageCommercial() {
        this.commercial_id.hasError('required') ? 'Vous devez choisir Votre Commercial ': '';
       }
       
}