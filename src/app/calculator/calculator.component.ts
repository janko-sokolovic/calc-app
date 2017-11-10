import { Component } from '@angular/core';
import { KEYS } from './key/keys.conf';
import { Key, KeyType } from './key/key';
import { Calculator } from './calculator';
import { CommandFactory } from './commands/command-factory';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  keys = KEYS;

  calculator = new Calculator;

  private handleKeyAction(key: Key): void {

    let command = CommandFactory.create(this.calculator, key);
    command.execute();
  }

}
