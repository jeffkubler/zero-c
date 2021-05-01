import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[autoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {

  constructor(
    private ref: ElementRef<HTMLElement>
    ) { }

    ngAfterViewInit() {
      Promise.resolve().then(()=> this.ref.nativeElement.focus());
    }

}
