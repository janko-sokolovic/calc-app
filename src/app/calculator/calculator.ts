export class Calculator {

    /**
    * Value which user populates by selecting numbers
    */
    currentValue = '';

    /**
    * Left operand's value
    * All values are persisted in here after calculation
    */
    leftOperand = 0;

    /**
    * Selected operation
    */
    operation = '';

    /**
     * Calculates operation
     */
    calculate() {
        let res = 0;

        if (this.operation === '+') {
            res = this.leftOperand + Number(this.currentValue);
        } else if (this.operation === '-') {
            res = this.leftOperand - Number(this.currentValue);
        } else if (this.operation === 'x') {
            res = this.leftOperand * Number(this.currentValue);
        } else if (this.operation === '÷') {
            res = this.leftOperand / Number(this.currentValue);
        } else if (this.operation === '%') {
            res = this.leftOperand % Number(this.currentValue);
        }
        return res;
    }
}