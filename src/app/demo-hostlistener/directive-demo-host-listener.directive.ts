import { style } from '@angular/animations';
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirectiveDemoHostListener]',
  standalone: true
})
export class DirectiveDemoHostListenerDirective {    

  @HostBinding('disabled') isButtonDisable:boolean = false
  
  @Input() bindFromView:string='Defaul'

  constructor() { }   
  
  @HostListener('click',['$event'])

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.appHighlight || 'red');
  // }

  onClick(a:Event){
    const targerElement = a.target as HTMLElement;
    if (targerElement.tagName.toLowerCase() === 'button') {
      console.log('Bạn vừa click vào một button trong component này')
      
      // this.isButtonDisable = !this.isButtonDisable;
      console.log(this.bindFromView)
    }
    else{
      console.log('Bạn vừa click vào một div trong component này')
    }    
    
  }

}
