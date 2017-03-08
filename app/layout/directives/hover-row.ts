import {Directive, ElementRef, Output, EventEmitter} from '@angular/core';

@Directive({
    selector: '[hover-row]',
    host: {
        '(click)': 'onMouseEnter()'
    }
})
export class HoverRowDirective{

    private ref = this.elementRef.nativeElement;
    private savedBckg: string;
    constructor(private elementRef: ElementRef){

    }

    @Output() userNameChange = new EventEmitter<void>();
    onClick(model: string){

    }
}