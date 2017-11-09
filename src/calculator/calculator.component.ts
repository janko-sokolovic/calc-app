import { Component } from '@angular/core';
import { KEYS } from './keys.conf';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  keys = KEYS;

  /**
  * Main value which is displayed.
  */
  private currentValue = 0;

}
