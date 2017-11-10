import { } from "./operation-command";
import { Calculator } from './../calculator';
import { KeyType, Key } from './../key/key';
import { PushNumberCommand, SetOperationCommand, YieldResultCommand, ClearCommand, InvertCommand, Command } from "./command";

export class CommandFactory {

    static create(calculator: Calculator, key: Key): Command {
        if (key.type === KeyType.NUMBER || key.type === KeyType.DECIMAL_POINT) {
            return new PushNumberCommand(calculator, key.value);
        } else if (key.type === KeyType.OPERATION) {
            return new SetOperationCommand(calculator, key.value);
        } else if (key.type === KeyType.YIELD) {
            return new YieldResultCommand(calculator);
        } else if (key.type === KeyType.CLEAR) {
            return new ClearCommand(calculator);
        } else if (key.type === KeyType.INVERT) {
            return new InvertCommand(calculator);
        }
    }
}