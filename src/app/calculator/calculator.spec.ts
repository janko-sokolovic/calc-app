import { TestBed, async } from '@angular/core/testing';
import { Calculator } from './calculator';
import {CommandFactory} from './commands/command-factory';
import { KeyType, Key } from './key/key';

describe('AppComponent', () => {
    beforeEach(() => {
    });

    it('should calculate properly', () => {
        let calculator = new Calculator;
        let pushFive = CommandFactory.create(calculator, new Key('5', KeyType.NUMBER));
        let add = CommandFactory.create(calculator, new Key('+', KeyType.OPERATION));
        let pushThree = CommandFactory.create(calculator, new Key('3', KeyType.NUMBER));
        let equals = CommandFactory.create(calculator, new Key('=', KeyType.YIELD));

        pushFive.execute();
        add.execute();
        pushThree.execute();
        equals.execute();


        expect(calculator.leftOperand).toEqual(8); 
    });

});
