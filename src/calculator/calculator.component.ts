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
  * Main value which is displayed
  */
  currentValue = '';

  /**
  * Left operand's value
  */
  private leftOperand = 0;

  /**
  * Right operand's value
  */
  private rightOperant = 0;

  /**
  * Selected operation
  */
  private operation = '';

  constructor() {
    this.currentValue = String(this.leftOperand);
  }

  handleKeyAction(event) {
    console.log(event);
  }

}
