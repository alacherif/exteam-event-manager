import {  Directive,  ElementRef,  HostListener,  Input } from '@angular/core';

@Directive({
  selector: '[alpha]'
})
export class AlphaDirective {

  constructor(private el: ElementRef) {}

  @HostListener('keypress',['$event']) onkeypress(event: KeyboardEvent) {
    if ((event.which > 64 && event.which < 91) ||
      (event.which > 96 && event.which < 123) || event.which == 8) {
      return true;
    } else
    if ((event.which >= 48 && event.which <= 57)) {

      return false;
    } else {
      return true;
    }
  }

}
