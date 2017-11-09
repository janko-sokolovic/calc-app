import { Key, KeyType } from './key/key';

export const KEYS: Key[] = [
    new Key('C', KeyType.CLEAR),
    new Key('+/-', KeyType.INVERT),
    new Key('%', KeyType.OPERATION),
    new Key('÷', KeyType.OPERATION),
    new Key('7', KeyType.NUMBER),
    new Key('8', KeyType.NUMBER),
    new Key('9', KeyType.NUMBER),
    new Key('x', KeyType.OPERATION),
    new Key('4', KeyType.NUMBER),
    new Key('5', KeyType.NUMBER),
    new Key('6', KeyType.NUMBER),
    new Key('-', KeyType.OPERATION),
    new Key('1', KeyType.NUMBER),
    new Key('2', KeyType.NUMBER),
    new Key('3', KeyType.NUMBER),
    new Key('+', KeyType.OPERATION),
    new Key('0', KeyType.NUMBER, 2),
    new Key('.', KeyType.DECIMAL_POINT),
    new Key('=', KeyType.YIELD),
];
