import { Component, EventEmitter, Input, Output  } from '@angular/core';
import {CommonModule} from '@angular/common';

type BtnVariants = "primary" | "secondary";
@Component({
  selector: 'button-primary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss'
})
export class ButtonPrimaryComponent {
  @Input("btn-text") btnText: string ="";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";


  @Output("") onButtonClick = new EventEmitter();



  submit(){
    this.onButtonClick.emit();
  }

}
