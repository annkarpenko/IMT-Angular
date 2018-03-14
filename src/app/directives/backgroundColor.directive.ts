//trying to use own directive

import { Directive, HostListener, HostBinding } from '@angular/core';
import { ElementDef } from '@angular/core/src/view';

@Directive({
  selector: '[appBackgroundDirective]'
})
export class BackgroundDirective{

  @HostBinding('style.backgroundColor') background: string;

  constructor() { }

  @HostListener('mouseenter') mouseEvent(){
    this.background='yellow';
  }

  @HostListener('mouseleave') mouseLeave(){
    this.background='transparent';
  }

}
