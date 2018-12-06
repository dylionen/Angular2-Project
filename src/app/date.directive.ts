import {Directive, HostListener, Input, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[dateDirective]'
})
export class DateDirective {

  @Input() private date:Date;
  private paragraph;
  constructor(private el:ElementRef, private renderer:Renderer2) {
    this.paragraph=this.renderer.createElement('p')
  }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event){

    this.paragraph.innerHTML = this.date;
    this.renderer.appendChild(this.el.nativeElement,this.paragraph);
  }

  @HostListener('mouseleave')
  mouseleave(eventDate: Event){
    this.renderer.removeChild(this.el.nativeElement,this.paragraph);
  }


}
