import { Component } from '@angular/core';
import { KEYS } from './keys.conf';
import { Key, KeyType } from './key/key';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { read, open } from 'fs';

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
  private currentValue = '';

  /**
  * Left operand's value
  */
  private leftOperand = 0;

  /**
  * Selected operation
  */
  private operation = '';

  constructor() {}

  /**
   * Handles key strokes.
   */
  handleKeyAction(key: Key): void {
    if (key.type === KeyType.NUMBER || key.type === KeyType.DECIMAL_POINT) {
      this.addNumber(key.value);
    } else if (key.type === KeyType.OPERATION) {
      this.setOperation(key.value);
    } else if (key.type === KeyType.YIELD) {
      this.doEquals();
    } else if (key.type === KeyType.CLEAR) {
      this.clear();
    } else if (key.type === KeyType.INVERT) {
      this.currentValue = - Number(this.currentValue) + '';
    }
  }

  addNumber(value: string): void {
    if (this.currentValue === '') {
      this.currentValue = value;
    } else {
      this.currentValue += value;
    }
  }

  setOperation(operation: string): void {
    if(this.operation !== ''){
      this.leftOperand = this.evaluateResult();
    } else {
      this.leftOperand = Number(this.currentValue); 
    }
    
    this.currentValue = '';
    this.operation = operation;
  }

  doEquals () :void {
    this.leftOperand  = this.evaluateResult();
    this.currentValue = '' + this.leftOperand;
    this.operation = '';
  }

  evaluateResult(): number {
    let result = 0;
    if (this.operation === '+') {
      result = Number(this.leftOperand) + Number(this.currentValue);
    } else if (this.operation === '-') {
      result = Number(this.leftOperand) - Number(this.currentValue);
    } else if (this.operation === 'x') {
      result = Number(this.leftOperand) * Number(this.currentValue);
    } else if (this.operation === '÷') {
      result = Number(this.leftOperand) / Number(this.currentValue);
    } else if (this.operation === '%') {
      result = Number(this.leftOperand) % Number(this.currentValue);
    }


    return result;
  }

  clear(): void {
    this.currentValue = '';
    this.operation = '';
    this.leftOperand = 0;
  }

}
