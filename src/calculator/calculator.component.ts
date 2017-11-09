import { Component } from '@angular/core';
import { KEYS } from './keys.conf';
import { Key, KeyType } from './key/key';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

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

  /**
   * Handles key strokes.
   */
  handleKeyAction(key: Key): void {
    if (key.type === KeyType.NUMBER || key.type === KeyType.DECIMAL_POINT) {
      this.addNumber(key.value);
    } else if (key.type === KeyType.OPERATION) {
      this.setOperation(key);
    } else if (key.type === KeyType.YIELD) {
      this.evaluateResult();
    } else if (key.type === KeyType.CLEAR) {
      this.clear();
    } else if (key.type === KeyType.INVERT) {
      this.currentValue = - Number(this.currentValue) + '';
    }

  }

  addNumber(value: string): void {
    if (this.currentValue === '0') {
      this.currentValue = value;
    } else {
      this.currentValue += value;
    }
  }

  setOperation(key: Key): void {
    this.leftOperand = Number(this.currentValue);
    this.operation = key.value;
    this.currentValue = '0';
  }

  evaluateResult(): void {
    let result = 0;
    if (this.operation === '+') {
      result = Number(this.currentValue) + Number(this.leftOperand);
    } else if (this.operation === '-') {
      result = Number(this.currentValue) - Number(this.leftOperand);
    } else if (this.operation === 'x') {
      result = Number(this.currentValue) * Number(this.leftOperand);
    } else if (this.operation === '÷') {
      result = Number(this.currentValue) / Number(this.leftOperand);
    } else if (this.operation === '%') {
      result = Number(this.leftOperand) % Number(this.currentValue);
    }

    this.currentValue = Math.round(Number(result.toFixed(7))) + '';

    this.leftOperand = result;
  }

  clear(): void {
    this.currentValue = '0';
    this.operation = '';
    this.leftOperand = 0;
  }

}
