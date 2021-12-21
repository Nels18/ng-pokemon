import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHightlight]'
})
export class BasicHightlightDirective implements OnInit, AfterViewInit {
  @Input() defaultColor = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor = 'red';
  @Input('appBasicHightlight') hightlightColor = 'green';

  constructor(private render: Renderer2, private elementRef: ElementRef) {
    console.log('construct');
    console.log(this.defaultColor);
  }
  ngOnInit(): void {
    console.log('init');
    console.log(this.defaultColor);
  }
  ngAfterViewInit(): void {
    console.log('after view init');
    console.log(this.defaultColor);
  }

  @HostListener('click') click(event: Event)  {
    this.backgroundColor = 'yellow';
    // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseup') mouseUp(event: Event)  {
    this.render.setStyle(this.elementRef.nativeElement, 'transition', 'background-color 2s ease');
  }

  @HostListener('mouseenter') mouseEnter(event: Event)  {
    this.backgroundColor = this.hightlightColor;
  }

  @HostListener('mouseleave') mouseLeave(event: Event)  {
    this.backgroundColor = this.defaultColor;
  }

}
