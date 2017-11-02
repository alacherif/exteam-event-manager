import {  Directive,  ElementRef,  HostListener,  Input } from '@angular/core';

@Directive({
  selector: '[phoneNumber]'
})
export class PhoneNumberDirective {

  constructor(private el: ElementRef) {}

  @HostListener('keypress',['$event']) onkeypress(event: KeyboardEvent) {
    if ((event.which > 64 && event.which < 91) ||
      (event.which > 96 && event.which < 123) || event.which == 8) {
      return false;
    } else
    if ((event.which >= 48 && event.which <= 57)) {

      return true;
    } else {
      return false;
    }
  }

}
