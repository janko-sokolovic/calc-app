import { Calculator } from "./../calculator";

export interface Command {
    execute(): void;
}

export class PushNumberCommand implements Command {
    constructor(private calculator: Calculator, private number: string) { }

    execute(): void {
        if (this.calculator.currentValue === '') {
            this.calculator.currentValue = this.number;
        } else {
            this.calculator.currentValue += this.number;
        }
    }
}

export class SetOperationCommand implements Command {
    constructor(private calculator: Calculator, private operation: string) { }

    execute(): void {

        let res = this.calculator.calculate();

        this.calculator.leftOperand = this.calculator.operation === '' ? Number(this.calculator.currentValue) : res;
        this.calculator.currentValue = '';
        this.calculator.operation = this.operation;
    }
}

export class YieldResultCommand implements Command {
    constructor(private calculator: Calculator) { }

    execute(): void {

        let res = this.calculator.calculate();

        this.calculator.leftOperand = res;
        this.calculator.currentValue = '' + this.calculator.leftOperand;
        this.calculator.operation = '';
    }
}

export class ClearCommand implements Command {
    constructor(private calculator: Calculator) { }

    execute(): void {
        this.calculator.currentValue = '';
        this.calculator.operation = '';
        this.calculator.leftOperand = 0;
    }
}

export class InvertCommand implements Command {
    constructor(private calculator: Calculator) { }

    execute(): void {
        this.calculator.currentValue = - Number(this.calculator.currentValue) + '';
    }
}