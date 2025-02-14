import { Component } from '@angular/core';
import {FormsLetterComponent} from '../forms-letter/forms-letter.component';

@Component({
  selector: 'app-home',
  imports: [
    FormsLetterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
